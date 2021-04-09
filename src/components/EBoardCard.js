import React from 'react';
import headshot from '../images/BlankHeadshot.jpg'

  function EBoardCard(props) {
      return(
            <div className="EBoardCard">
              <div className = "Headshot">
              <img src={headshot} alt="Headshot" height ="200" width="200"/>
              </div>
              <p style={{'fontSize':'25px'}}><b>{props.firstname} {props.lastname}</b></p>
              <p style={{'fontSize':'20px'}}>{props.position}</p>
            </div>
      );

  }

export default EBoardCard;
