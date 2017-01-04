import React from 'react';


export default class Buttom extends React.Component {
  render() {
    return (
      <div style={{ margin: '1em' }}>
        <label htmlFor={this.props.name} className="label" style={{ color: 'white' }}>{this.props.text}</label>
        <p className="control">
          <input required="required" id={this.props.name} className={"input " + this.props.styleClass} name={this.props.name} type={this.props.type} placeholder={this.props.text} />
        </p>
      </div>
    );
  }
}
