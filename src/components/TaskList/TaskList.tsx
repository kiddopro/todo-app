import "./TaskList.css";
import { Button, Card, Modal } from "..";
import { useRef } from "react";
import { Task } from "../../models";

type TaskListProps = {
  tasks: Task[];
};

function TaskList({ tasks }: TaskListProps) {
  const modalRef = useRef<HTMLDialogElement>(null);

  const handleClick = () => {
    if (modalRef.current) {
      modalRef.current.showModal();
    }
  };

  return (
    <main>
      <div className="container">
        {tasks.map((t) => (
          <Card key={t.id} {...t} />
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
