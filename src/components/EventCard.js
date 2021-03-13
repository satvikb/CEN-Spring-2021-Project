import React from 'react';
import Card from 'react-bootstrap/Card'
import InputGroup from 'react-bootstrap/InputGroup'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import FormControl from 'react-bootstrap/FormControl'

  function EventCard(props) {
      return(
            <div className="EventCard">
              <Card style={{ width: '18rem' }}>
                <Card.Body>
                  <Card.Title style={{'font-size':'25px'}}>Event Card</Card.Title>
                  <Card.Text>
                    <p>{props.title}</p>
                    <p>{props.location}</p>
                    <p>{props.date}</p>
                    <p>{props.info}</p>
                  </Card.Text>
                  <div>
                    <InputGroup className="mb-3">
                      <FormControl
                        placeholder="Email"
                        aria-label="Email"
                        aria-describedby="basic-addon2"
                      />
                      <InputGroup.Append>
                        <Button variant="outline-secondary">RSVP</Button>
                      </InputGroup.Append>
                    </InputGroup>

                 

                  
                  </div>
        
                
                </Card.Body>
              </Card>
              

            </div>
      );

  }

export default EventCard;
