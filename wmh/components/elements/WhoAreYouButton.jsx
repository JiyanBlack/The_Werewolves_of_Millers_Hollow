import React from 'react';

import Button from './Button';
import Cookies from 'js-cookie';

export default class WhoAreYouButton extends React.Component {
  constructor() {
    super();
    this.state = { displayid: 'none' };
    Cookies.set('identity', 'Fortune Teller');
    this.identity = Cookies.get('identity');
  }

  componentDidMount() {
    document.getElementById('who-are-you-button').onclick = (el) => {
      el.preventDefault();
      console.log('Display Identity');
      this.setState({ displayid: 'block' });
    };

    document.getElementById('delete-info').onclick = (el) => {
      el.preventDefault();
      console.log('Close Identity window');
      this.setState({ displayid: 'none' });
    };
  }


  render() {
    return (
      <div className="has-text-centered" style={{ margin: '2em auto' }}>
        <div className="notification is-info" style={{ display: this.state.displayid }} >
          <button className="delete" id="delete-info" />
          You are {this.identity}
        </div>
        <button id="who-are-you-button" className="button is-primary is-large" >Check Your Identity</button>
      </div>
    );
  }
}
