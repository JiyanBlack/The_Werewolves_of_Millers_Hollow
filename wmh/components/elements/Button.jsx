import React from 'react';


export default class Buttom extends React.Component {
  render() {
    return (<div className={this.props.buttonClass}>{this.props.text}</div>);
  }
}
