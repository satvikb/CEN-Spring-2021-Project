import NavigationButton from './NavigationButton';
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
// import { Router, Route, Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
//import ButtonToolbar from 'react-bootstrap/ButtonToolbar'
import Footer from './Footer';


import Home from '../pages/Home'
import OurTeam from '../pages/OurTeam'
import Involvement from '../pages/Involvement'
import Events from '../pages/Events'
import Apply from '../pages/Apply'
import AdminLogin from '../pages/AdminLogin'
import AdminDashboard from '../pages/AdminDashboard'
import { ButtonToolbar } from 'react-bootstrap';
import PrivateRoute from './PrivateRoute'

import history from './history';
import { auth } from '../firebase.config';
import ContactForm from '../pages/ContactForm';



var buttons = [
  {
    "text":"Home",
    "key":"home",
    "url":"/"
  },
  {
    "text":"Our Team",
    "key":"ourteam",
    "url":"/ourteam"
  },
  {
    "text":"Involvement",
    "key":"involvement",
    "url":"/involvement"
  },
  {
    "text":"Events",
    "key":"events",
    "url":"/events"
  },
  {
    "text":"Contact Us",
    "key":"contactus",
    "url":"/contactus"
  }
]

function requireAuth(nextState, replace) {
  var user = auth.currentUser;
  const isLoggedIn = user != undefined;
  // console.log("LG "+isLoggedIn)
  if(!isLoggedIn){
    replace({
      pathname: '/adminlogin',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function NavigationBar(props) {
  return (
    <Router history={history}>
      <div className="NavigationBar"  >
        <p className="WebsiteHeader"></p>
        <img  width="127.66" height="100" src="https://images.squarespace-cdn.com/content/55368b50e4b04b38c815870d/1429643472174-WY3RYJH8JLC47P1O8YR0/Tamid_Stacked_RGB.png?content-type=image%2Fpng"></img>
        <ButtonGroup >
        {buttons.map((item, index) => {
          return <NavigationButton key={item.key} text={item.text} url={item.url}></NavigationButton>
        })}
        </ButtonGroup>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ourteam" component={OurTeam}>
          </Route>
          <Route path="/involvement">
            <Involvement />
          </Route>
          <Route path="/events">
            <Events />
          </Route>
          
          <Route path="/contactus">
            <ContactForm />
          </Route>

          <PrivateRoute path="/admindashboard" onEnter={requireAuth} component={AdminDashboard} />
          <Route path="/adminlogin" component={AdminLogin} />
        </Switch>


      </div>
      <Footer>
      </Footer>

    </Router>


  );
}

export default NavigationBar;
