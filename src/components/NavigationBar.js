import NavigationButton from './NavigationButton';
import React from "react";
import { Router, Switch, Route } from "react-router-dom";
// import { Router, Route, Link } from 'react-router-dom';
import ButtonGroup from 'react-bootstrap/ButtonGroup'
//import ButtonToolbar from 'react-bootstrap/ButtonToolbar'

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
import { db, auth } from '../firebase.config';

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
  }
]

function requireAuth(nextState, replace) {
  var user = auth.currentUser;
  if(!user){
    replace({
      pathname: '/adminlogin',
      state: { nextPathname: nextState.location.pathname }
    })
  }
}

function NavigationBar(props) {
  return (
    <Router history={history}>
      <div className="NavigationBar">
        <p className="WebsiteHeader">Tamid UF</p>
        <ButtonGroup>
        {buttons.map((item, index) => {
          return <NavigationButton key={item.key} text={item.text} url={item.url}></NavigationButton>
        })}
        </ButtonGroup>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/ourteam">
            <OurTeam />
          </Route>
          <Route path="/involvement">
            <Involvement />
          </Route>
          <Route path="/events">
            <Events />
          </Route>

          <PrivateRoute path="/admindashboard" onEnter={requireAuth} component={AdminDashboard} />
          <Route path="/adminlogin" component={AdminLogin} />
        </Switch>
      </div>
    </Router>
  );
}

export default NavigationBar;
