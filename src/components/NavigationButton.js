import { BrowserRouter as Link } from "react-router-dom";
import Nav from 'react-bootstrap/Nav'

function NavigationButton(props) {
  return (
    <Nav.Link href={props.url} to={props.url}>
      <button className="NavigationButton" >
        <p>{props.text}</p>
      </button>
    </Nav.Link>

  );
}

export default NavigationButton;
