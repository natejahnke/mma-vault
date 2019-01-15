import React from "react";
import { BrowserRouter, Route, Switch, Link, NavLink } from "react-router-dom";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import FightersPage from "../components/FightersPage";
import EventsPage from "../components/EventsPage";
import RankingsPage from "../components/RankingsPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={FightersPage} exact={true} />
        <Route path="/fighters" component={FightersPage} exact={true} />
        <Route path="/rankings" component={RankingsPage} />
        <Route path="/events" component={EventsPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
