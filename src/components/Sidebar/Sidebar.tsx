import { Header } from "..";
import "./Sidebar.css";

type SidebarProps = {
  activeLink: string;
  onLinkClick: (link: string) => void;
};

function Sidebar({ activeLink, onLinkClick }: SidebarProps) {
  return (
    <aside className="aside-content">
      <Header className="header-sidebar">
        <h2>Todo App</h2>
      </Header>
      <div>
        <a
          href=""
          className={activeLink === "all" ? "active" : ""}
          onClick={() => onLinkClick("all")}
        >
          All Tasks
        </a>
        <a
          className={activeLink === "completed" ? "active" : ""}
          href="#"
          onClick={() => onLinkClick("completed")}
        >
          Completed Tasks
        </a>
        <a
          className={activeLink === "incompleted" ? "active" : ""}
          href="#"
          onClick={() => onLinkClick("incompleted")}
        >
          Incompleted Tasks
        </a>
        {/* <a href="#">Deleted Tasks</a> */}
      </div>
    </aside>
  );
}

export default Sidebar;
