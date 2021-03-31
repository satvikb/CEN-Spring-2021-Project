import EventCard from "../components/EventCard";
import ReactCalendar from "../components/ReactCalendar";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from 'react-bootstrap/CardDeck';



function Events() {
  return (
    <div className="Events">
        <p>Tamid Group Events</p>
        <div class="col d-flex justify-content-center">
          <CardDeck>
              <EventCard title='Event Title' location='Event Location' date='Event Date' info='Event Info' />
              <EventCard title='Event Title' location='Event Location' date='Event Date' info='Event Info' />
              <EventCard title='Event Title' location='Event Location' date='Event Date' info='Event Info' />
          </CardDeck>   
      </div>
       

        <ReactCalendar>

        </ReactCalendar>
       
    </div>
  );
}

export default Events;
