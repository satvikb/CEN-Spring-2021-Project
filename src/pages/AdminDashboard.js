import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState,useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { db, auth } from '../firebase.config';
import Form from 'react-bootstrap/Form'
import  { Redirect } from 'react-router-dom'

import history from '../components/history';

// var didLogin = false;
// auth.onAuthStateChanged((user) => {
//   if (user) {
//     // User is signed in, see docs for a list of available properties
//     // https://firebase.google.com/docs/reference/js/firebase.User
//     var uid = user.uid;
//     console.log("LOGGED IN "+uid)
//     didLogin = true;
//     // ...
//   } else {
//     console.log("LOGGED OUT ")
//     // User is signed out
//     // ...
//   }
// });

function AdminDashboard() {
  // var user = auth.currentUser;
  // if(!user){
  //   alert("Not logged in!");
  //   // history.push('/adminlogin')
  //   return <Redirect to='/adminlogin'  />
  // }

  const [updates,setUpdates]=useState([])
  const [events,setEvents]=useState([])

  const fetchUpdates=async()=>{
    const response=db.collection('updates');
    const data=await response.get();
    var ups = []
    data.docs.forEach(item=>{
     ups.push(item.data())
    // setUpdates([...updates,item.data()])
    })
    setUpdates(ups)


    const eventsResponse=db.collection('events');
    const eventsData = await eventsResponse.get();
    var evs = []
    eventsData.docs.forEach(item=>{
     evs.push(item.data())
    // setEvents([...events,item.data()])
    })
    setEvents(evs)
  }
  useEffect(() => {
    fetchUpdates();
  }, [])

 var eventCounter = 1;
 const [eventTitle, setEventTitle] = useState('');
 const [eventLocation, setEventLocation] = useState('');
 const [eventDate, setEventDate] = useState('');
 const [eventTime, setEventTime] = useState('');
 const [eventInfo, setEventInfo] = useState('');

 // The state every time an event happens
 const handleEventTitleChange = event => {
   setEventTitle(event.target.value);
 };
 const handleEventLocationChange = event => {
   setEventLocation(event.target.value);
 };
 const handleEventDateChange = event => {
   setEventDate(event.target.value);
 };
 const handleEventTimeChange = event => {
   setEventTime(event.target.value);
 };
 const handleEventInfoChange = event => {
   setEventInfo(event.target.value);
 };

 const handleEventSubmit = event => {
     event.preventDefault();
     console.log("Submit "+event)
     addEventToDatabase();
 };

  const addEventToDatabase = () => {
    db.collection('events').add({
      title:eventTitle,
      location:eventLocation,
      time:eventDate+" at "+eventTime,
      details:eventInfo
    });
  };

  var udpateCounter = 1;
  const [updateTitle, setupdateTitle] = useState('');
  const [updateDate, setupdateDate] = useState('');
  const [updateTime, setupdateTime] = useState('');
  const [updateInfo, setupdateInfo] = useState('');

  const handleupdateTitleChange = update => {
    setupdateTitle(update.target.value);
  };
  const handleupdateDateChange = update => {
    setupdateDate(update.target.value);
  };
  const handleupdateTimeChange = update => {
    setupdateTime(update.target.value);
  };
  const handleupdateInfoChange = update => {
    setupdateInfo(update.target.value);
  };

  const handleUpdateSubmit = update => {
      update.preventDefault();
      console.log("Submit "+update)
      addUpdateToDatabase();
  };

   const addUpdateToDatabase = () => {
     db.collection('updates').add({
       title:updateTitle,
       time:updateDate+" at "+updateTime,
       details:updateInfo
     });
   };

  return (
    <div className="AdminDashboard">
    Admin dashboard Page

    <Accordion defaultActiveKey="0">
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="0">
        View Events
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="0">
      <Card.Body>

        <Form onSubmit={handleEventSubmit}>
          <Form.Row>
            <Form.Group controlId="formGridTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control placeholder="Event Title" onChange={handleEventTitleChange}/>
            </Form.Group>

            <Form.Group controlId="formGridLocation">
              <Form.Label>Location</Form.Label>
              <Form.Control placeholder="Event Location" onChange={handleEventLocationChange}/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" onChange={handleEventDateChange}/>
            </Form.Group>

            <Form.Group controlId="formGridTime">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" onChange={handleEventTimeChange}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Event Info</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={handleEventInfoChange}/>
          </Form.Group>

          <Button onClick={handleEventSubmit} variant="primary" type="submit">
            Add Event
          </Button>
        </Form>



        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Event Title</th>
              <th scope="col">Event Location</th>
              <th scope="col">Event Time</th>
              <th scope="col">Event Details</th>
            </tr>
          </thead>
          <tbody>

            {
              events && events.map(event=>{
                return (
                  <tr key={event.title}>
                    <th scope="row">{eventCounter++}</th>
                    <td>{event.title}</td>
                    <td>{event.location}</td>
                    <td>{event.time}</td>
                    <td>{event.details}</td>
                  </tr>
                )
              })
            }
          </tbody>
        </table>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
  <Card>
    <Card.Header>
      <Accordion.Toggle as={Button} variant="link" eventKey="1">
        View Updates
      </Accordion.Toggle>
    </Card.Header>
    <Accordion.Collapse eventKey="1">
      <Card.Body>

        <Form onSubmit={handleUpdateSubmit}>
          <Form.Row>
            <Form.Group controlId="formGridTitle">
              <Form.Label>Title</Form.Label>
              <Form.Control placeholder="Update Title" onChange={handleupdateTitleChange}/>
            </Form.Group>
          </Form.Row>

          <Form.Row>
            <Form.Group controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" onChange={handleupdateDateChange}/>
            </Form.Group>

            <Form.Group controlId="formGridTime">
              <Form.Label>Time</Form.Label>
              <Form.Control type="time" onChange={handleupdateTimeChange}/>
            </Form.Group>
          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Update Info</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={handleupdateInfoChange}/>
          </Form.Group>

          <Button onClick={handleUpdateSubmit} variant="primary" type="submit">
            Add Update
          </Button>
        </Form>



        <table className="table">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Update Title</th>
              <th scope="col">Update Time</th>
              <th scope="col">Update Details</th>
            </tr>
          </thead>
          <tbody>
          {
            updates && updates.map(update=>{
              return (
                <tr key={update.title}>
                  <th scope="row">{udpateCounter++}</th>
                  <td>{update.title}</td>
                  <td>{update.time}</td>
                  <td>{update.details}</td>
                </tr>
              )
            })
          }
          </tbody>
        </table>

      </Card.Body>
    </Accordion.Collapse>
  </Card>
</Accordion>
    </div>
  );
}

export default AdminDashboard;
