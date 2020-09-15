import React from "react";
import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch } from "react-router-dom";

import "assets/scss/material-kit-react.scss?v=1.9.0";

// pages for this product
import Components from "views/Components/Components.js";
import LandingPage from "views/LandingPage/LandingPage.js";
import ProfilePage from "views/ProfilePage/ProfilePage.js";
import GSASidekicksPage from "views/GSASidekicksPage/GSASidekicksPage.js";
import StingSoccerPage from "views/StingSoccerPage/StingSoccerPage.js";
import StonyPointPage from "views/StonyPointPage/StonyPointPage.js";

var hist = createBrowserHistory();

ReactDOM.render(
  <Router history={hist}>
    <Switch>
      <Route path="/gsasidekicks-page" component={GSASidekicksPage} />
      <Route path="/stingsoccer-page" component={StingSoccerPage} />
      <Route path="/stonypoint-page" component={StonyPointPage} />
      <Route path="/components-page" component={Components} />
      <Route path="/profile-page" component={ProfilePage} />
      <Route path="/" component={LandingPage} />   
    </Switch>
  </Router>,
  document.getElementById("root")
);
