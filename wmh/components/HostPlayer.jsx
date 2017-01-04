import React from 'react';
import DiedPeople from './elements/DiedPeople';
import InputBox from './elements/InputBox';
import WhoAreYouButton from './elements/WhoAreYouButton';

export default class HostPlayer extends React.Component {
  constructor() {
    super();
    this.style = {
      layout: {
        width: '100%', height: '100%', position: 'absolute', top: 0, left: 0,
      }, buttonStyle: { margin: '0 auto', display: 'block' },
    };
  }

  render() {
    return (
      <section className="hero is-medium is-dark is-bold" style={this.style.layout}>
        <DiedPeople />
        <WhoAreYouButton />
        <div className="control" >
          <button id="tell-who-died-button" className="button is-warning is-large" style={this.style.buttonStyle}>Who died last night?</button>
        </div>
        <InputBox styleClass="is-warning" text="Who is shot by the hunter? (Enter 0 if no one.)" type="tel" name="shot-by-hunter" />
        <InputBox styleClass="is-primary" text="Who is voted to be banished?(Enter 0 if no one.)" type="tel" name="be-banished" />
        <div className="control" >
          <button id="go-to-night-button" className="button is-danger is-large" style={this.style.buttonStyle}>It's night!</button>
        </div>
        <br />
      </section>
    );
  }
}
