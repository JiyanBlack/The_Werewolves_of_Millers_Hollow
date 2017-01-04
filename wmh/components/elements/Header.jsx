import React from 'react';


export default class Buttom extends React.Component {
  render() {
    return (<div className="hero-body">
      <div className="container">
        <h1 className="title has-text-centered">
          {this.props.text.toUpperCase()}
        </h1>
      </div>
    </div>);
  }
}



