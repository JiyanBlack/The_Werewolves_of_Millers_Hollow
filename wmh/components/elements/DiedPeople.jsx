import React from 'react';


export default class HostPlayer extends React.Component {
  constructor() {
    super();
  }

  render() {
    return (
      <div className="content has-text-centered" style={{ color: 'white', position: 'relative', top: '5%' }}>
        <h1 style={{ color: 'white' }}> Who are died or banished: </h1>
        <h2 style={{ color: 'white' }}>1,2,3,4</h2>
      </div>);
  }
}
