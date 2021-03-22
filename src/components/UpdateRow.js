import React from "react";

function UpdateRow(props) {
  return (
    <div className="UpdateRowContainer">
      <div className="UpdateRowContent">
        <div className="UpdateRowHeader">
          <div className="UpdateRowTitle">{props.title}</div>
          <div className="UpdateRowTime">{props.time}</div>
        </div>

        <p className="UpdateRowText">{props.text}</p>
      </div>
    </div>
  );
}

export default UpdateRow;
