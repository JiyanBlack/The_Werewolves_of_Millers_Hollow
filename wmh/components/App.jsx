import React from 'react';
import { Router, Route, hashHistory } from 'react-router';
import Start from './Start';

export default class App extends React.Component {
  render() {
    return (
      <Router history={hashHistory}><Route path="/" component={Start} /></Router>
    );
  }
}
