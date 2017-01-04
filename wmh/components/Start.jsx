import React from 'react';
import LinktoButton from './elements/LinktoButton';
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

        <Header text="The werewolves of millers hollow" />

        <div style={this.style.buttonStyle}>
          <div className="columns">
            <div className="column has-text-centered">
              <LinktoButton id="create-game" to="/create-game" buttonClass="button is-primary is-large" text="I am the host!" />
            </div>
          </div>
          <div className="columns">
            <div className="column has-text-centered">
              <LinktoButton id="join-game" to="/join-game" buttonClass="button is-info is-large" text="Join a game!" />
            </div>
          </div>
        </div>

      </section>
    );
  }

}
