import React,{useState,useEffect} from 'react';
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'
import { db, auth, timestamp as fbTimestamp, timestampToString} from '../firebase.config';

  function EventCard(props) {
    var docId = props.docId;
    // console.log("CARD "+docId)
    const [rsvpEmail, setRsvpEmail] = useState('');

    const handleRsvpChange = rsvpInput => {
      setRsvpEmail(rsvpInput.target.value);
    };

    const handleRsvpSubmit = rsvp => {
        rsvp.preventDefault();
        addRSVPToDatabase();
    };

    const addRSVPToDatabase = () => {
      db.collection("events").doc(docId).collection("rsvps").add({
        email:rsvpEmail
      }).then(function(ref){
        // console.log("ADDED RSVP "+ref.id)
      })
    };

    return(
      <div className="EventCard">
        <Card bg={'Primary'} style={{ width: '18rem' }}>
          <Card.Body>
            <Card.Header style={{'fontSize':'20px'}}>Event Card</Card.Header>
            <Card.Text>
              {/* Removed <p> and replaced with <br /> to fix error in the console.*/}
              {props.title}<br />
              {props.location}<br />
              {props.date}<br />
              {props.info}<br />
            </Card.Text>
            <div>
              <InputGroup className="mb-3">
                <FormControl
                  placeholder="Email"
                  aria-label="Email"
                  aria-describedby="basic-addon2"
                  onChange={handleRsvpChange}
                />
                <InputGroup.Append>
                  <Button onClick={handleRsvpSubmit} variant="outline-secondary">RSVP</Button>
                </InputGroup.Append>
              </InputGroup>
            </div>
          </Card.Body>
        </Card>

      </div>
    );

  }

export default EventCard;
