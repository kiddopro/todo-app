import "./Card.css";
import { Task } from "../../models";
import { Button, Footer } from "..";

function Card({ ...props }: Task) {
  const { id, title, description, done } = props;

  return (
    <div className="card" key={id}>
      <span
        style={{
          backgroundColor: done ? "rgb(105, 145, 72)" : "rgb(231, 141, 81)",
        }}
      >
        {done ? "completed" : "pending"}
      </span>
      <div className="card-content">
        <h2 className="card-title">{title}</h2>
        <p className="card-description">{description}</p>
        <Footer footerClass="card-footer">
          <Button btnClass="button-edit">
            <i className="fa-solid fa-pen"></i>
          </Button>
          <Button btnClass="button-delete">
            <i className="fa-solid fa-trash"></i>
          </Button>
        </Footer>
      </div>
    </div>
  );
}

export default Card;
