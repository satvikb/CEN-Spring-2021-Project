import { Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

// var buttonStyle = {
//   background: "red",
//   border-radius: "5px"

// };

function NavigationButton(props) {
  return (
    <Link href={props.url} to={props.url} >
      <button className="NavigationButton" class="astext">
        <p>{props.text}</p>
      </button>
    </Link>

  );
}

export default NavigationButton;
