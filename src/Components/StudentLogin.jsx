import { useState } from "react";

export default function StudentLogin() {
  const [roll, setRoll] = useState("");

  const handleLogin = () => {
    alert(`Student Logged in with Roll No: ${roll}`);
  };

  return (
    <div>
      <h3>Student Login</h3>
      <input
        placeholder="Roll Number"
        onChange={(e) => setRoll(e.target.value)}
      />
      <button onClick={handleLogin}>Login</button>
    </div>
  );
}
