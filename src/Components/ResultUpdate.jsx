import { useState } from "react";

export default function ResultUpdate() {
  const [results, setResults] = useState([]);
  const [student, setStudent] = useState("");
  const [marks, setMarks] = useState("");

  const addResult = () => {
    if (!student || !marks) return;
    setResults([...results, { student, marks }]);
    setStudent("");
    setMarks("");
  };

  return (
    <div>
      <h3>Result Update</h3>
      <input
        placeholder="Student Name"
        value={student}
        onChange={(e) => setStudent(e.target.value)}
      />
      <input
        placeholder="Marks"
        value={marks}
        onChange={(e) => setMarks(e.target.value)}
      />
      <button onClick={addResult}>Add Result</button>
      <ul>
        {results.map((r, index) => (
          <li key={index}>
            {r.student} — {r.marks} marks
          </li>
        ))}
      </ul>
    </div>
  );
}
