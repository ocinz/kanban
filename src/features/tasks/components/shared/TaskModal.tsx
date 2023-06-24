import type { Dispatch, SetStateAction } from "react";
import type { Task, CSSProperties } from "../../../../types";
import TaskForm from "./TaskForm";

interface TaskModalProps {
  headingTitle: string;
  type: string;
  setIsModalOpen: Dispatch<SetStateAction<boolean>>;
  setIsMenuOpen?: Dispatch<SetStateAction<boolean>>;
  defaultProgressOrder: number;
  task?: Task;
}

const TaskModal = ({ headingTitle, type, setIsModalOpen, setIsMenuOpen, defaultProgressOrder, task }: TaskModalProps): JSX.Element => {
  return (
    <div style={styles.container}>
      <div style={styles.modalTop}>
        <h1>{headingTitle}</h1>
        <span
          className="material-icons"
          style={styles.icon}
          onClick={(): void => {
            setIsModalOpen(false);
          }}
        >
          close
        </span>
      </div>
      <TaskForm type={type} defaultProgressOrder={defaultProgressOrder} setIsModalOpen={setIsModalOpen} setIsMenuOpen={setIsMenuOpen} task={task} />
    </div>
  );
};

const styles: CSSProperties = {
  container: {
    border: "1px solid gray",
    position: "fixed",
    top: "20%",
    left: "40%",
    width: "25%",
    backgroundColor: "#fff",
    padding: "28px",
    zIndex: 10,
  },
  modalTop: {
    display: "flex",
    justifyContent: "space-between",
  },
  icon: {
    cursor: "pointer",
  },
};

export default TaskModal;
