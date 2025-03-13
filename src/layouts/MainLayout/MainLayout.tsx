import { Header, Input, Sidebar, TaskList } from "../../components";
import "./MainLayout.css";

function MainLayout() {
  return (
    <div className="main-layout">
      <Sidebar />
      <div className="main-body">
        <Header headerClass="header-content">
          <Input
            inputClass="header-search-input"
            placeholder="Search"
            type="search"
          />
        </Header>
        <TaskList />
      </div>
    </div>
  );
}

export default MainLayout;
