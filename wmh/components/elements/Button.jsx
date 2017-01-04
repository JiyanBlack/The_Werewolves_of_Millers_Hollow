import React from 'react';


export default class Button extends React.Component {
  render() {
    return (<div id={this.props.id} className={this.props.buttonClass}>{this.props.text}</div>);
  }
}
