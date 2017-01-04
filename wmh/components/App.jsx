import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Start from './Start';
import CreateGame from './CreateGame';
import JoinGame from './JoinGame';
import HostPlayer from './HostPlayer';
import NormalPlayer from './NormalPlayer';
import FortuneTeller from './FortuneTeller';
import Bodyguard from './Bodyguard';

export default class App extends React.Component {
  constructor() {
    super();
  }

  componentDidMount() {

  }


  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Start} />
        <Route path="/create-game" component={CreateGame} />
        <Route path="/join-game" component={JoinGame} />
        <Route path="/host-player" component={HostPlayer} />
        <Route path="/normal-player" component={NormalPlayer} />
        <Route path="/poison-save-witch" />
        <Route path="/kill-werewolves" />
        <Route path="/prediction-fortune-teller" component={FortuneTeller} />
        <Route path="/can-hunter-fire" />
        <Route path="/guard-bodyguard" component={Bodyguard} />
        <Route path="/who-are-you" />
      </Router>
    );
  }
}
