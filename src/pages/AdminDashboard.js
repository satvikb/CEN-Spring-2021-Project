import "bootstrap/dist/css/bootstrap.min.css";
import React,{useState,useEffect} from 'react';
import Accordion from 'react-bootstrap/Accordion'
import Card from 'react-bootstrap/Card'
import Button from 'react-bootstrap/Button'
import { db, auth, timestamp as fbTimestamp, timestampToString} from '../firebase.config';
import Form from 'react-bootstrap/Form'
import  { Redirect } from 'react-router-dom'
import Modal from '../components/Modal'

function AdminDashboard() {
  var that = this;
  const [updates,setUpdates]=useState([])
  const [events,setEvents]=useState([])

  const fetchUpdates=async()=>{
    const response=db.collection('updates');
    const data=await response.get();
    var ups = []
    data.docs.forEach(item=>{
      ups.push({
        id: item.id,
        data: item.data()
      })
    // setUpdates([...updates,item.data()])
    })
    ups.sort(function(a,b) {
      return b.data.time.seconds - a.data.time.seconds
    });
    setUpdates(ups)


    const eventsResponse=db.collection('events');
    const eventsData = await eventsResponse.get();
    var evs = []
    eventsData.docs.forEach(item=>{
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
    fetchUpdates();
  }, [])

 var eventCounter = 1;
 const [eventTitle, setEventTitle] = useState('');
 const [eventLocation, setEventLocation] = useState('');
 const [eventDate, setEventDate] = useState('');
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
 const handleEventInfoChange = event => {
   setEventInfo(event.target.value);
 };

 const handleEventSubmit = event => {
     event.preventDefault();
     console.log("Submit "+event)
     addEventToDatabase();
 };

  const addEventToDatabase = () => {
    let eventDateObj = new Date(eventDate)
    var firestoreTimestamp = fbTimestamp.fromDate(eventDateObj);

    var eventData = {
      title:eventTitle,
      location:eventLocation,
      time:firestoreTimestamp,
      details:eventInfo,
    }
    db.collection('events').add(eventData).then(function(ref){
      console.log("ADDED "+ref.id)
      var eventsCopy = events;
      eventsCopy.push({
        id: ref.id,
        data:eventData
      })
      eventsCopy.sort(function(a,b) {
        return b.data.time.seconds - a.data.time.seconds
      });
      fetchUpdates(eventsCopy)
      // setEvents(eventsCopy)
      // alert("Successfully added!");

      // window.location.reload();
    });
  };

  var udpateCounter = 1;
  const [updateTitle, setupdateTitle] = useState('');
  const [updateDate, setupdateDate] = useState('');
  const [updateInfo, setupdateInfo] = useState('');

  const handleupdateTitleChange = update => {
    setupdateTitle(update.target.value);
  };
  const handleupdateDateChange = update => {
    setupdateDate(update.target.value);
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
    let updateDateObj = new Date(updateDate)
    var firestoreTimestamp = fbTimestamp.fromDate(updateDateObj);

    var updateData = {
      title:updateTitle,
      time:firestoreTimestamp,
      details:updateInfo
    }
    db.collection('updates').add(updateData).then(function(ref){
      var updatesCopy = updates;
      updatesCopy.push({
        id: ref.id,
        data:updateData
      })
      fetchUpdates(updatesCopy)
    });
  };

  const deleteDocument = (collectionName, docId) => {
    console.log("Deleting "+collectionName + " "+docId)
    db.collection(collectionName).doc(docId).delete().then(() => {
      if(collectionName == "events"){
        var eventsCopy = events;
        eventsCopy = events.filter(function( obj ) {
          return obj.id !== docId;
        });
        eventsCopy.sort(function(a,b) {
          return b.data.time.seconds - a.data.time.seconds
        });
        setEvents(eventsCopy)
      }else{
        var updatesCopy = updates;
        updatesCopy = updates.filter(function( obj ) {
          return obj.id !== docId;
        });
        updatesCopy.sort(function(a,b) {
          return b.data.time.seconds - a.data.time.seconds
        });
        setUpdates(updatesCopy)

      }

      // alert("Successfully deleted!");
      // window.location.reload();
      // that.forceUpdate();
    }).catch((error) => {
      console.error("Error removing: ", error);
    });
  }


  return (

    <div className="AdminDashboard">
      <h3 style={{marginBottom:50}}> Admin Dashboard</h3>


    <Accordion>
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

            <Form.Group controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="datetime-local" onChange={handleEventDateChange}/>
            </Form.Group>

          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Event Info</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={handleEventInfoChange}/>
          </Form.Group>

          <Button onClick={handleEventSubmit} style={{marginBottom:50}} variant="primary" type="submit">
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
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>

            {
              events && events.map(event=>{
                return (
                  <tr key={event.id}>
                    <th scope="row">{eventCounter++}</th>
                    <td>{event.data.title}</td>
                    <td>{event.data.location}</td>
                    <td>{timestampToString(event.data.time)}</td>
                    <td>{event.data.details}</td>
                    <td>
                    <Modal eventName={event.data.title} docId={event.id}>
                      View RSVPs
                    </Modal>
                    <Button onClick={() => {deleteDocument("events", event.id)}} variant="danger">
                      Delete
                    </Button>
                    </td>
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
      <Card.Body >

        <Form onSubmit={handleUpdateSubmit} >
          <Form.Row>
            <Form.Group controlId="formGridTitle" >
              <Form.Label>Title</Form.Label>
              <Form.Control placeholder="Update Title" onChange={handleupdateTitleChange}/>
            </Form.Group>

            <Form.Group controlId="formGridDate">
              <Form.Label>Date</Form.Label>
              <Form.Control type="datetime-local" onChange={handleupdateDateChange}/>
            </Form.Group>

          </Form.Row>

          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>Update Info</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={handleupdateInfoChange}/>
          </Form.Group>

          <Button onClick={handleUpdateSubmit} style={{marginBottom:50}} variant="primary" type="submit">
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
              <th scope="col">Actions</th>
            </tr>
          </thead>
          <tbody>
          {
            updates && updates.map(update=>{
              return (
                <tr key={update.id}>
                  <th scope="row">{udpateCounter++}</th>
                  <td>{update.data.title}</td>
                  <td>{timestampToString(update.data.time)}</td>
                  <td>{update.data.details}</td>
                  <td><Button onClick={() => {deleteDocument("updates", update.id)}} variant="danger">
                    Delete
                  </Button>

                  </td>
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
