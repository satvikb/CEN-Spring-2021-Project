import React from 'react';
import headshot from '../images/BlankHeadshot.jpg'
 
  function EBoardCard() {
      return(
            <div className="EBoardCard">
              <img src={headshot} alt="Headshot" height ="200" width="200"/>
              <p style={{'font-size':'25px'}}><b>FirstName LastName</b></p>
              <p style={{'font-size':'20px'}}>Position</p>
            </div>
      );

  }

export default EBoardCard;
