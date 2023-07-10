import { Link } from "react-router-dom";

const DUMMY_EVENTS = [
  { id: "e1", title: "Some Event" },
  { id: "e2", title: "Another Event" },
];

export default function EventPage() {
  return (
    <>
      <p>This is Event Page</p>
      <ul>
        {DUMMY_EVENTS.map((item) => (
          <li key={item.id}>
            <Link to={item.id}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </>
  );
}
