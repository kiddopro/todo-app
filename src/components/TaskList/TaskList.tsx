import "./TaskList.css";
import { mockTasks } from "../../data";
import { Button, Card } from "..";
function TaskList() {
  return (
    <main>
      <div className="container">
        {mockTasks.map((task) => (
          <Card key={task.id} {...task} />
        ))}
        <Button btnClass="button-primary" label="Add new Task" />
      </div>
    </main>
  );
}

export default TaskList;
