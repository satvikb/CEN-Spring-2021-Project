import EventCard from "../components/EventCard";
import ReactCalendar from "../components/ReactCalendar";
import "bootstrap/dist/css/bootstrap.min.css";
import CardDeck from 'react-bootstrap/CardDeck';


import { db, auth, timestamp as fbTimestamp, timestampToString} from '../firebase.config';
import React,{useState,useEffect} from 'react';

var cardDeckStyle = {
  padding: "20px"
};

function Events() {
  const [events,setEvents]=useState([])
  const fetchEvents=async()=>{
     const response=db.collection('events');
     const data=await response.get();
     var evs = []
     data.docs.forEach(item=>{
       evs.push({
         id: item.id,
         data: item.data()
       })
      // setEvents([...events,item.data()])
     })

     evs.sort(function(a,b) {
       return b.data.time.seconds - a.data.time.seconds
     });

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

        <div className="col d-flex justify-content-center" style={cardDeckStyle}>

          <CardDeck>
          {
            events && events.map(event=>{
              return <EventCard docId={event.id} key={event.id} title={event.data.title} location={event.data.location} date={timestampToString(event.data.time)} info={event.data.details} />
            })
          }
          </CardDeck>
        </div>

        <iframe src="https://calendar.google.com/calendar/embed?height=600&amp;wkst=1&amp;bgcolor=%23039BE5&amp;ctz=America%2FNew_York&amp;src=dGFtaWRhdHVmQGdtYWlsLmNvbQ&amp;src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;src=ZW4udXNhI2hvbGlkYXlAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&amp;color=%23039BE5&amp;color=%2333B679&amp;color=%230B8043&amp;showTitle=0&amp;showPrint=1&amp;showNav=1&amp;showDate=1&amp;showTabs=1&amp;showCalendars=1&amp;showTz=1"  width="800" height="600" frameborder="0" scrolling="no"></iframe>

    </div>
  );

}

export default Events;
