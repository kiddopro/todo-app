import "./Card.css";
import { Task } from "../../models";
import { Button } from "..";

function Card({ ...props }: Task) {
  const { id, title, description, done } = props;

  return (
    <div className="card" key={id}>
      <span
        style={{
          backgroundColor: done ? "rgb(105, 145, 72)" : "rgba(143, 52, 52)",
        }}
      >
        {done ? "completed" : "pending"}
      </span>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
      </div>
      <footer>
        <Button label="Delete" btnClass="button-delete" />
        <Button label="Edit" btnClass="button-edit" />
      </footer>
    </div>
  );
}

export default Card;
