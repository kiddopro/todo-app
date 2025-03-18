import { Task } from "../../models";
import "./Modal.css";

type ModalProps = {
  modalRef: React.RefObject<HTMLDialogElement> | null;
  task?: Task;
};

function Modal({ modalRef, task }: ModalProps) {
  return (
    <dialog id="dialog" closedby="any" ref={modalRef}>
      <div className="dialog-header">
        <h2>{task ? "Edit Task" : "Add New Task"}</h2>
      </div>
      <div className="dialog-content">
        <input type="text" placeholder="Task Title" value={task?.title} />
        <input
          type="text"
          placeholder="Task Description"
          value={task?.description}
        />
      </div>
      <div className="dialog-footer">
        <form method="dialog">
          <button>Close</button>
        </form>
        <button>Save</button>
      </div>
    </dialog>
  );
}

export default Modal;
