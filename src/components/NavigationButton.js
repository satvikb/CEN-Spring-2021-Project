import { BrowserRouter as Link } from "react-router-dom";

function NavigationButton(props) {
  return (
    <Link to={props.url}>
    <button className="NavigationButton" >
        <p>
         {props.text}
        </p>
    </button>
    </Link>
  );
}

export default NavigationButton;
