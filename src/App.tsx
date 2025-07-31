import Header from "./components/Header";
import Sidebar from "./components/Sidebar";
import Footer from "./components/Footer";
import Task from "./components/Task";
import TaskInput from "./components/TaskInput";
import { type TaskCardProps } from "./libs/types";


function App() {

  const TaskCard: TaskCardProps[] = [
    {id: 1,title: "Read a book", description: "Vite + React + Bootstrap + TS", isDone: false},
    {id: 2,title: "Write code", description: "Finish project for class", isDone: false},
    {id: 3,title: "Deploy app", description: "Push project to GitHub Pages", isDone: false},
  ]
  
  
  return (
    <div className="d-flex flex-column" style={{ minHeight: "100vh" }}>
      {/* Header ด้านบน */}
      <Header />

      <div className="d-flex flex-grow-1">
        {/* Sidebar ด้านซ้าย */}
        <Sidebar userName="chanadda" type="admin" />
        {/* Main content */}
        <div className="container text-center">
          <main className="flex-grow-1 p-4">
          {/* Card รายการ */}
            <TaskInput />
            <Task{...TaskCard[0]} />
            <Task{...TaskCard[1]} />
            <Task{...TaskCard[2]} />
          </main>
        </div>
      </div>
      <Footer year="2026" fullName="Ratthaphumi tayati" studentId="670610726"></Footer>
    </div>
  );
}

export default App;
