import React from 'react';


export default class Start extends React.Component {

  constructor() {
    super();
    this.state = {};
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
        <div className="hero-body">
          <div className="container">
            <h1 className="title has-text-centered">
              The Werewolves of Millers Hollow
              </h1>
          </div>
        </div>
        <div style={this.style.buttonStyle}>
          <div className="columns">
            <div className="column has-text-centered">
              <a className="button is-primary is-large" href="">I'm the host!</a>
            </div>
          </div>
          <div className="columns">
            <div className="column has-text-centered">
              <a className="button is-info is-large" href="">Join a game!</a>
            </div>
          </div>
        </div>
      </section>
    );
  }

}
