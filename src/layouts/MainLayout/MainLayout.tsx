import { Header, Input, Sidebar, TaskList } from "../../components";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-body">
        <Header className="header-content">
          <h1>Todo App</h1>
          <Input placeholder="Search" type="search" />
        </Header>
        <TaskList />
      </div>
    </div>
  );
}

export default MainLayout;
