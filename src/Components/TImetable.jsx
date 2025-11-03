export default function Timetable() {
  const timetable = [
    { day: "Monday", subject: "Math" },
    { day: "Tuesday", subject: "Science" },
    { day: "Wednesday", subject: "English" },
    { day: "Thursday", subject: "Computer" },
    { day: "Friday", subject: "History" },
  ];

  return (
    <div>
      <h3>Timetable</h3>
      <ul>
        {timetable.map((item, index) => (
          <li key={index}>
            {item.day}: {item.subject}
          </li>
        ))}
      </ul>
    </div>
  );
}
