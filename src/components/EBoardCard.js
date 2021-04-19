import React from 'react';
import Blair from '../images/blair.jpg'
import Jordana from '../images/jordana.jpg'
import Jobeth from '../images/jobeth.jpg'
import Lauren from '../images/lauren.jpg'
import Camila from '../images/camila.jpg'
import Shea from '../images/shea.jpg'
import William from '../images/william.jpg'
import Gabriella from '../images/gabriella.jpg'

const headshots = {Blair,Jordana,Jobeth,Lauren,Camila,Shea,William,Gabriella};

  function EBoardCard(props) {
      return(
        
            <div className="EBoardCard">
              <div className = "Headshot">
              <img src={headshots[props.firstname]} alt="Headshot" height ="350" width="250"/>
              </div>
              <p style={{'fontSize':'25px'}}><b>{props.firstname} {props.lastname}</b></p>
              <p style={{'fontSize':'20px'}}>{props.position}</p>
            </div>
      );

  }

export default EBoardCard;
