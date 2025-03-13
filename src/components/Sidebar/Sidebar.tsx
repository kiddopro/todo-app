import Header from "../Header/Header";
import "./Sidebar.css";

function Sidebar() {
  return (
    <aside className="aside-content">
      <Header className="header-sidebar">
        <h2>Todo App</h2>
      </Header>
      <div>
        <a href="" className="active">
          All Tasks
        </a>
        <a href="">Completed Tasks</a>
        <a href="">Incompleted Tasks</a>
        <a href="">Deleted Tasks</a>
      </div>
    </aside>
  );
}

export default Sidebar;
