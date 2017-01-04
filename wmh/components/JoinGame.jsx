import React from 'react';
import Header from './elements/Header';
import InputBox from './elements/InputBox';

export default class Start extends React.Component {

  constructor() {
    super();
    this.style = {
      layout: {
        width: '100%', height: '100%', position: 'absolute', top: 0, left: 0,
      },
      inputBox: {
        width: '80%',
        position: 'relative',
        margin: '0 auto',
        bottom: '30%',
      }, buttonStyle: { margin: '0 auto', display: 'block' },

    };
  }

  componentDidMount() {
    document.getElementById('join-button').onclick(() => { });
  }

  render() {
    return (

      <section className="hero is-medium is-dark is-bold" style={this.style.layout}>
        <Header text="join an existing game" />
        <div style={this.style.inputBox}>
          <InputBox styleClass="is-primary" text="Room ID: " type="text" name="room" />
          <br />
          <button id="join-button" type="submit" className="button is-primary is-large" style={this.style.buttonStyle}>Join!</button>
        </div>

      </section>

    );
  }


}
