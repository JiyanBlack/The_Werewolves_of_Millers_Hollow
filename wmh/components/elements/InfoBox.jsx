import React from 'react';

export default class WhoAreYouButton extends React.Component {
  componentDidMount() {
    document.getElementById('delete-info').onclick = (el) => {
      el.preventDefault();
      console.log('Close Identity window');
      el.target.parentNode.style = 'display:none';
    };
  }

  render() {
    return (
      <div className="has-text-centered" style={{ margin: '2em auto' }}>
        <div className="notification is-info" style={this.props.style} >
          <button className="delete" id="delete-info" />
          {this.props.text}
        </div>
      </div>
    );
  }
}
