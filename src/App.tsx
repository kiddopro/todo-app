import "./App.css";
import {MainLayout} from "./layouts";

// function App() {
//   return (
//     <div
//       style={{
//         display: "flex",
//         gap: "40px",
//         marginTop: "40px",
//         marginLeft: "30px",
//         flexWrap: "wrap",
//       }}
//     >
//       {mockTasks.map((task) => (
//         <Card key={task.id} {...task} />
//       ))}
//       <Button label="Add new Task" />
//     </div>
//   );
// }

function App() {
  return <MainLayout />
}

export default App;
