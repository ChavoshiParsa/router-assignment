import { Link, useParams } from "react-router-dom";

export default function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <p>This is Event Detail Page</p>
      <p>{params.eventId}</p>
      <p><Link to=".." relative="path">Back</Link></p>
    </>
  );
}
