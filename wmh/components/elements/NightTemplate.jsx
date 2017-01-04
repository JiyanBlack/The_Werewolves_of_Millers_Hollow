import React from 'react';
import InputBox from './InputBox';


export default class NightTemplate extends React.Component {

  componentDidMount() {
    this.action = this.props.action;
    this.msg = document.getElementById(this.props.name).value;
    document.getElementById('$(this.props.name)-button').onclick = () => {
      socket.emit(this.action, this.msg);
    };
  }

  render() {
    return (
      <div className="has-text-centered" style={{ position: 'relative', bottom: '10%' }}>
        <InputBox styleClass="is-warning" text={`${this.props.text} (Enter 0 if no one.)`} type="tel" name={this.props.name} />
        <button id={'$(this.props.name)-button'} className="button is-danger is-large" >Confirm!</button>
      </div>);
  }

}
