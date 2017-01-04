import React from 'react';

import Button from './Button';
import Cookies from 'js-cookie';
import InfoBox from './InfoBox';

export default class WhoAreYouButton extends React.Component {
  constructor() {
    super();
    this.state = { displayid: 'none' };
    Cookies.set('identity', 'Fortune-Teller');
    this.identity = Cookies.get('identity');
  }

  componentDidMount() {
    document.getElementById('who-are-you-button').onclick = (el) => {
      el.preventDefault();
      console.log('Display Identity');
      this.setState({ displayid: 'block' });
    };
  }


  render() {
    return (
      <div className="has-text-centered" style={{ margin: '2em auto' }}>
        <InfoBox text={`You are ${this.identity}`} style={{ display: this.state.displayid }} />
        <button id="who-are-you-button" className="button is-primary is-large" >Check Your Identity</button>
      </div>
    );
  }
}
