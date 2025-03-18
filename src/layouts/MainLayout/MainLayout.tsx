import { useState } from "react";
import { Header, Input, Sidebar, TaskList } from "../../components";
import "./MainLayout.css";
import { mockTasks as tasks } from "../../data";

function MainLayout() {
  const [activeLink, setActiveLink] = useState("all");

  const handleLinkClick = (link: string) => {
    setActiveLink(link);
  };

  const filteredTasks = tasks.filter((task) => {
    if (activeLink === "all") return true;
    if (activeLink === "completed") return task.done;
    if (activeLink === "incompleted") return !task.done;
    return true;
  });

  return (
    <div className="main-layout">
      <Sidebar activeLink={activeLink} onLinkClick={handleLinkClick} />
      <div className="main-body">
        <Header className="header-content">
          <h1>Todo App</h1>
          <Input placeholder="Search" type="search" />
        </Header>
        <TaskList tasks={filteredTasks} />
      </div>
    </div>
  );
}

export default MainLayout;
