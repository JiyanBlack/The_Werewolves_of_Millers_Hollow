import React from 'react';
import DiedPeople from './elements/DiedPeople';
import LinktoButton from './elements/LinktoButton';
import WhoAreYouButton from './elements/WhoAreYouButton';

export default class NormalPlayer extends React.Component {
  constructor() {
    super();
    this.style = {
      layout: {
        width: '100%', height: '100%', position: 'absolute', top: 0, left: 0,
      },
    };
  }

  render() {
    return (
      <section className="hero is-medium is-dark is-bold" style={this.style.layout}>
        <DiedPeople />
        <WhoAreYouButton />
      </section>
    );
  }
}
