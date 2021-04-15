import React,{useState,useEffect} from 'react';
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { db, auth, timestamp as fbTimestamp, timestampToString} from '../firebase.config';
import Button from 'react-bootstrap/Button'

function Modal(props) {

  const [rsvps,setRsvps]=useState([])

  var docId = props.docId
  const viewRSVPs = async function() {
    const response=db.collection("events").doc(docId).collection("rsvps")
    console.log("GETTING RSVPS "+JSON.stringify(props)+" "+docId)
    const data=await response.get();
    var emls = []
    data.docs.forEach(item=>{
      emls.push({
        id: item.id,
        data: item.data()
      })
    // setUpdates([...updates,item.data()])
    })
    setRsvps(emls)
  }
  useEffect(() => {
    viewRSVPs();
  }, [])

  return (
  <Popup
      trigger={<Button variant="primary"> View RSVPs </Button>}
      modal
      nested
    >
    <h1>RSVPs for event: {props.eventName}</h1>
    {
      rsvps && rsvps.map(eml=>{
        return (
          <p>{eml.data.email}</p>
        )
      })
    }

  </Popup>
  )
};

export default Modal;
