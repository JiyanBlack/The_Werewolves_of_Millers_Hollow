import React from 'react';
import { Link } from 'react-router';
import Button from './Button';

export default class LinktoButton extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="has-text-centered" style={{ margin: '2em auto' }}>
        <Link to={this.props.to} id={this.props.id}><Button buttonClass={this.props.buttonClass} text={this.props.text} /></Link>
      </div>
    );
  }
}
