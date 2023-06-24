import { useState } from "react";
import type { Dispatch, SetStateAction } from "react";
import type { Task, CSSProperties } from "../../../../types";
import TaskModal from "../shared/TaskModal";
import { TASK_MODAL_TYPE } from "../../../../constants/app";
import { useTasksAction } from "../../hooks/Tasks";

interface TaskMenuProps {
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>;
  task: Task;
}

const TaskMenu = ({ setIsMenuOpen, task }: TaskMenuProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { deleteTask } = useTasksAction();

  return (
    <div style={styles.menu}>
      <div style={styles.menuItem}>
        <span
          className="material-icons"
          onClick={(): void => {
            setIsModalOpen(true);
          }}
        >
          edit
        </span>
        Edit
      </div>
      <div style={styles.menuItem}>
        <span
          className="material-icons"
          onClick={(): void => {
            deleteTask(task.id);
          }}
        >
          delete
        </span>
        Delete
      </div>
      <span
        className="material-icons"
        style={styles.closeIcon}
        onClick={(): void => {
          setIsMenuOpen(false);
        }}
      >
        close
      </span>
      {isModalOpen && <TaskModal headingTitle="Edit your task" type={TASK_MODAL_TYPE.EDIT} setIsModalOpen={setIsModalOpen} setIsMenuOpen={setIsMenuOpen} defaultProgressOrder={task.progressOrder} task={task} />}
    </div>
  );
};

const styles: CSSProperties = {
  menu: {
    backgroundColor: "#fff",
    border: "1px solid gray",
    padding: "8px 16px",
    position: "absolute",
    top: "-10px",
    right: "4%",
    zIndex: 10,
  },
  menuItem: {
    display: "flex",
    marginBottom: "8px",
    cursor: "pointer",
  },
  closeIcon: {
    position: "absolute",
    top: "0px",
    right: "2px",
    cursor: "pointer",
  },
};

export default TaskMenu;
