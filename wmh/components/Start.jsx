import React from 'react';
import { Link } from 'react-router';
import Button from './elements/Button';
import Header from './elements/Header';

export default class Start extends React.Component {

  constructor() {
    super();
    this.style = {
      layout: {
        width: '100%', height: '100%', position: 'absolute', top: 0, left: 0,
      },
      buttonStyle: {
        position: 'relative', bottom: '10%',
      },
    };
  }

  render() {
    return (

      <section className="hero is-medium is-dark is-bold" style={this.style.layout}>

      <Header text='The werewolves of millers hollow' />

        <div style={this.style.buttonStyle}>
          <div className="columns">
            <div className="column has-text-centered">
              <Link to="/create-game"><Button buttonClass="button is-primary is-large" text="I am the host!" /></Link>
            </div>
          </div>
          <div className="columns">
            <div className="column has-text-centered">
              <Link to="/join-game"><Button buttonClass="button is-info is-large" text="Join a game!" /></Link>
            </div>
          </div>
        </div>

      </section>
    );
  }

}
