import { useState } from "react";
import TaskCard from "./TaskCard";
import type { Task, CSSProperties } from "../../../../types";
import TaskModal from "../shared/TaskModal";
import { TASK_PROGRESS_ID, TASK_PROGRESS_STATUS, TASK_MODAL_TYPE } from "../../../../constants/app";

interface TaskColumnProps {
  columnTitle: string;
  tasks: Task[];
}

const TaskColumn = ({ columnTitle, tasks }: TaskColumnProps): JSX.Element => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const getProgressCategory = (progressStatus: string): number => {
    switch (progressStatus) {
      case TASK_PROGRESS_STATUS.NOT_STARTED:
        return TASK_PROGRESS_ID.NOT_STARTED;
      case TASK_PROGRESS_STATUS.IN_PROGRESS:
        return TASK_PROGRESS_ID.IN_PROGRESS;
      case TASK_PROGRESS_STATUS.WAITING:
        return TASK_PROGRESS_ID.WAITING;
      case TASK_PROGRESS_STATUS.COMPLETED:
        return TASK_PROGRESS_ID.COMPLETED;
      default:
        return TASK_PROGRESS_ID.NOT_STARTED;
    }
  };

  return (
    <div style={styles.categoryColumn}>
      <div style={styles.columnTitleWrapper}>
        <h2 style={styles.categoryTitle}>{columnTitle}</h2>
        <div
          className="material-icons"
          style={styles.plusIcon}
          onClick={(): void => {
            setIsModalOpen(true);
          }}
        >
          add
        </div>
      </div>
      <div>
        {tasks.map((task: Task) => {
          return <TaskCard key={task.id} task={task} />;
        })}
      </div>
      {isModalOpen && <TaskModal headingTitle="Add your task" type={TASK_MODAL_TYPE.ADD} setIsModalOpen={setIsModalOpen} defaultProgressOrder={getProgressCategory(columnTitle)} />}
    </div>
  );
};

const styles: CSSProperties = {
  plusIcon: {
    cursor: "pointer",
  },
  categoryColumn: {
    width: "22%",
  },
  columnTitleWrapper: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "0 4px",
  },
};

export default TaskColumn;
