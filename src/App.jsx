import { useState } from "react";
import ParentLogin from "./components/ParentLogin";
import StudentLogin from "./components/StudentLogin";
import Attendance from "./components/Attendance";
import Timetable from "./components/Timetable";
import ResultUpdate from "./components/ResultUpdate";

function App() {
  const [activePage, setActivePage] = useState("home");

  const renderPage = () => {
    switch (activePage) {
      case "parent":
        return <ParentLogin />;
      case "student":
        return <StudentLogin />;
      case "attendance":
        return <Attendance />;
      case "timetable":
        return <Timetable />;
      case "result":
        return <ResultUpdate />;
      default:
        return <h2>Welcome to Student Management System</h2>;
    }
  };

  return (
    <div>
      <h1>Student Management System</h1>
      <nav>
        <button onClick={() => setActivePage("home")}>Home</button>
        <button onClick={() => setActivePage("parent")}>Parent Login</button>
        <button onClick={() => setActivePage("student")}>Student Login</button>
        <button onClick={() => setActivePage("attendance")}>Attendance</button>
        <button onClick={() => setActivePage("timetable")}>Timetable</button>
        <button onClick={() => setActivePage("result")}>Result Update</button>
      </nav>
      <hr />
      {renderPage()}
    </div>
  );
}

export default App;
