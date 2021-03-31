import EventCard from "../components/EventCard";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from 'react-bootstrap/CardDeck';



function Events() {
  return (
    <div className="Events">
        <p>Tamid Group Events</p>
        <CardDeck>
            <EventCard title='Event Title' location='Event Location' date='Event Date' info='Event Info' />
            <EventCard title='Event Title' location='Event Location' date='Event Date' info='Event Info' />
            <EventCard title='Event Title' location='Event Location' date='Event Date' info='Event Info' />
        </CardDeck>
       
    </div>
  );
}

export default Events;
