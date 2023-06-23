import { useRecoilState } from "recoil";
import { tasksState } from "../TaskAtoms";
import type { Task } from "../../../types";
import { TASK_PROGRESS_ID } from "../../../constants/app";

interface useTaskActionType {
  completeTask: (taskId: number) => void;
  moveTaskCard: (taskId: number, directionNumber: 1 | -1) => void;
  addTask: (title: string, detail: string, dueDate: string, progressOrder: number) => void;
  editTask: (id: number, title: string, detail: string, dueDate: string, progressOrder: number) => void;
}

export const useTasksAction = (): useTaskActionType => {
  const [tasks, setTasks] = useRecoilState<Task[]>(tasksState);

  const completeTask = (taskId: number): void => {
    const updatedTasks: Task[] = tasks.map((task) => (task.id === taskId ? { ...task, progressOrder: TASK_PROGRESS_ID.COMPLETED } : task));
    setTasks(updatedTasks);
  };

  const moveTaskCard = (taskId: number, directionNumber: 1 | -1): void => {
    const updatedTasks: Task[] = tasks.map((task) => (taskId == task.id ? { ...task, progressOrder: task.progressOrder + directionNumber } : task));
    setTasks(updatedTasks);
  };

  const addTask = (title: string, detail: string, dueDate: string, progressOrder: number): void => {
    const newTask: Task = {
      id: tasks.length + 1,
      title,
      detail,
      dueDate,
      progressOrder,
    };
    setTasks([...tasks, newTask]);
  };

  const editTask = (id: number, title: string, detail: string, dueDate: string, progressOrder: number): void => {
    tasks.map((task) => {
      if (task.id == id) {
        task.title = title;
        task.detail = detail;
        task.dueDate = dueDate;
        task.progressOrder = progressOrder;
      }
    });
  };

  return {
    completeTask,
    moveTaskCard,
    addTask,
    editTask,
  };
};
