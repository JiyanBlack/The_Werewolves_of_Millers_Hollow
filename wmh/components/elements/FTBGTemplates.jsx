import React from 'react';
import NightTemplate from './NightTemplate';
import Header from './Header';


export default class FTBGTemplates extends React.Component {
  constructor() {
    super();
    this.style = {
      layout: {
        width: '100%', height: '100%', position: 'absolute', top: 0, left: 0,
      },
    };
  }

  renderAccordingToCharacter() {
    const identity = this.props.identity;
    if (identity === 'Fortune-Teller') {
      return (<NightTemplate name="predict-Fortune-Teller" text="Who you want to predict ?" action="prediction" />);
    } else if (identity === 'Bodyguard') {
      return (<NightTemplate name="protect-Bodyguard" text="Who you want to protect ?" action="guard-who" />);
    }
  }

  render() {
    return (
      <section className="hero is-medium is-dark is-bold" style={this.style.layout}>

        <Header text="It is your turn!" />
        {this.renderAccordingToCharacter()}

      </section>
    );
  }

}
