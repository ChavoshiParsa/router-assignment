import PropTypes from "prop-types";
import classes from "./EventItem.module.css";
import { Link } from "react-router-dom";

export default function EventItem({ event }) {
  function startDeleteHandler() {
    // ...
  }

  return (
    <article className={classes.event}>
      <img src={event.image} alt={event.title} />
      <h1>{event.title}</h1>
      <time>{event.date}</time>
      <p>{event.description}</p>
      <menu className={classes.actions}>
        <Link to="edit">Edit</Link>
        <button onClick={startDeleteHandler}>Delete</button>
      </menu>
    </article>
  );
}

EventItem.propTypes = {
  event: PropTypes.object.isRequired,
};
