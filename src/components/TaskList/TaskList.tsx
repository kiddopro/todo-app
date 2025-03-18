import "./TaskList.css";
import { mockTasks } from "../../data";
import { Button, Card, Modal } from "..";
import { useRef } from "react";

function TaskList() {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <main>
      <div className="container">
        {mockTasks.map((task) => (
          <Card key={task.id} {...task} />
        ))}
        <Modal modalRef={modalRef} />
        <Button
          onClick={handleClick}
          btnClass="button-primary"
          label="Add new Task"
        />
      </div>
    </main>
  );
}

export default TaskList;
