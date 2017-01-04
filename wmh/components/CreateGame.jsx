import React from 'react';

import InputBox from './elements/InputBox';

export default class Start extends React.Component {

  constructor() {
    super();
    this.style = {
      layout: {
        width: '100%', height: '100%', position: 'absolute', top: 0, left: 0,
      },
      formLayout: {
        width: '90%', margin: '0 auto',
      },
      buttonStyle: { margin: '0 auto', display: 'block' },
    };
  }

  isNumeric(n) {
    return !isNaN(parseFloat(n)) && isFinite(n);
  }

  componentDidMount() {
    const myform = document.getElementById('create-game-form');
    const submitButton = document.getElementById('submit-button');
    const ftno = document.getElementById('ftno');
    const hunterno = document.getElementById('hunterno');
    const guardno = document.getElementById('guardno');
    const witchno = document.getElementById('witchno');
    const villagerno = document.getElementById('villagerno');
    const wolfno = document.getElementById('wolfno');
    const room = document.getElementById('room');

    const formElement = {
      room,
      ftno,
      hunterno,
      guardno,
      witchno,
      villagerno,
      wolfno,
    };
    Object.values(formElement).forEach((el) => { el.value = Math.round(Math.random() * 5); });
    const formResult = {};
    Object.keys(formElement).forEach((el) => { formResult[el] = formElement[el].value; });

    submitButton.addEventListener('click', (e) => {
      e.preventDefault();
      console.log(formResult);
    });
  }


  render() {
    return (

      <section className="hero is-medium is-dark is-bold" style={this.style.layout}>
        <div>


          <form className="is-large" style={this.style.formLayout} id="create-game-form">
            <InputBox styleClass="is-primary" text="Please provide a room name" type="text" name="room" />
            <br />
            <InputBox styleClass="is-primary" text="Fortune Teller Number" type="tel" name="ftno" />
            <InputBox styleClass="is-info" text="Hunter Number" type="tel" name="hunterno" />
            <InputBox styleClass="is-success" text="Bodyguard Number" type="tel" name="guardno" />
            <InputBox styleClass="is-warning" text="Witch Number" type="tel" name="witchno" />
            <InputBox text="Villager Number" type="tel" name="villagerno" />
            <InputBox styleClass="is-danger" text="Werewolf Number" type="tel" name="wolfno" />
            <br />
            <div className="control" >
              <button id="submit-button" type="submit" className="button is-primary is-large" style={this.style.buttonStyle}>Submit</button>
            </div>
          </form>
        </div>
      </section>

    );
  }


}
