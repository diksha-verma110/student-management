import { useState } from "react";

export default function Attendance() {
  const [presentStudents, setPresentStudents] = useState([]);
  const [studentName, setStudentName] = useState("");

  const markAttendance = () => {
    if (studentName.trim() === "") return;
    setPresentStudents([...presentStudents, studentName]);
    setStudentName("");
  };

  return (
    <div>
      <h3>Attendance</h3>
      <input
        placeholder="Student Name"
        value={studentName}
        onChange={(e) => setStudentName(e.target.value)}
      />
      <button onClick={markAttendance}>Mark Present</button>
      <ul>
        {presentStudents.map((name, index) => (
          <li key={index}>{name}</li>
        ))}
      </ul>
    </div>
  );
}
