import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Start from './Start';
import CreateGame from './CreateGame';
import JoinGame from './JoinGame';
import HostPlayer from './HostPlayer';

export default class App extends React.Component {
  constructor() {
    super();
  }


  render() {
    return (
      <Router history={hashHistory}>
        <Route path="/" component={Start} />
        <Route path="/create-game" component={CreateGame} />
        <Route path="/join-game" component={JoinGame} />
        <Route path="/host-player" component={HostPlayer} />
        <Route path="/normal-player" />
        <Route path="/poison-save-witch" />
        <Route path="/eat-werewolves" />
        <Route path="/discover-fortune-teller" />
        <Route path="/can-hunter-fire" />
        <Route path="/guard-bodyguard" />
      </Router>
    );
  }
}
