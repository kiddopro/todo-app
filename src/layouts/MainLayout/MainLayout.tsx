import { Header, Input, Sidebar, TaskList } from "../../components";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <Header className="header-content">
        <h1>Todo App</h1>
        <Input placeholder="Search" type="search" />
      </Header>
      <TaskList />
    </div>
  );
}

export default MainLayout;
