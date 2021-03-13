import EventCard from "../components/EventCard";

function Events() {
  return (
    <div className="Events">
        <p>Events</p>
        <EventCard title='Event Title' location='Event Location' date='Event Date' info='Event Info' />
    </div>
  );
}

export default Events;
