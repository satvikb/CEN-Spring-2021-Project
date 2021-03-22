import NavigationButton from './NavigationButton';
import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Home from '../pages/Home'
import OurTeam from '../pages/OurTeam'
import Involvement from '../pages/Involvement'
import Events from '../pages/Events'
import Apply from '../pages/Apply'

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
function NavigationBar(props) {
  return (
    <Router>
      <div className="NavigationBar">
        <p className="WebsiteHeader">Tamid UF</p>
        {buttons.map((item, index) => {
          return <NavigationButton key={item.key} text={item.text} url={item.url}></NavigationButton>
        })}

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
        </Switch>
      </div>
    </Router>
  );
}

export default NavigationBar;
