import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

// var buttonStyle = {
//   background: "red",
//   border-radius: "5px"

// };

function NavigationButton(props) {
  return (
    <div className="navButton">
    <Link href={props.url} to={props.url} >
      <button className="NavigationButton astext" style={{padding:'20px'}}>
        <p>{props.text}</p>
      </button>
    </Link>
    </div>
  );
}

export default NavigationButton;
