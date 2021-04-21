 import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import SocialFollow from "./SocialFollow";
import {Link } from "react-router-dom";
import Button from 'react-bootstrap/Button'



var style1 = {
  backgroundColor: "#42B5E8",
  borderTop: "1px solid #42B5E8",
  textAlign: "center",
  //padding: "20px",
  position: "relative",
  // left: "0",
  bottom: "0",
  //height: "60px",
  margin: "0",
  width: "100%",
  margintop: "-32767px",
  minheight: "100vh"
};

class Footer extends React.Component
{
  render()
  {
    return (
        <div class="jumbotron text-center"  style={style1}>
          <SocialFollow />
               <div className="HomeFooter">
          <Link to="/adminlogin">

            <Button variant="link">Admin Access</Button>
          </Link>
      </div>
      </div>

    )
  }
}
export default Footer;
