import React from "react";

function UpdateRow(props) {
  return (
    <div className="UpdateRowContainer">
      <p className="UpdateRowTitle">{props.title}</p>
      <p className="UpdateRowText">{props.text}</p>
    </div>
  );
}

export default UpdateRow;
