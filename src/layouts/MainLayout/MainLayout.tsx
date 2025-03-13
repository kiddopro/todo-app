import { Header, Sidebar, TaskList } from "../../components";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <Header />
      <TaskList />
    </div>
  );
}

export default MainLayout;
