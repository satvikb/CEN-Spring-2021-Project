import EventCard from "../components/EventCard";
import ReactCalendar from "../components/ReactCalendar";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from 'react-bootstrap/CardDeck';

import db from '../firebase.config';
import React,{useState,useEffect} from 'react';


function Events() {
  const [events,setEvents]=useState([])
  const fetchEvents=async()=>{
     const response=db.collection('events');
     const data=await response.get();
     var evs = []
     data.docs.forEach(item=>{
       evs.push(item.data())
      // setEvents([...events,item.data()])
     })
     setEvents(evs)
   }
   useEffect(() => {
     fetchEvents();
   }, [])

  return (
    <div className="Events">
        <div className="EventsBackgroundImage">
          <div className="BannerTitle">
            <h1 className="BannerTitleText">Tamid Group Events</h1>
          </div>
        </div>

        <div className="col d-flex justify-content-center">
          <CardDeck>
          {
            events && events.map(event=>{
              return <EventCard key={event.title} title={event.title} location={event.location} date={event.time.seconds} info={event.details} />
            })
          }
          </CardDeck>
        </div>

        <ReactCalendar>
        </ReactCalendar>
    </div>
  );

}

export default Events;
