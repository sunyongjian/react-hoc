import React, { Component } from 'react';
import Usual from './usual';

class StyleContainer extends Component {

  render() {
    return (<div style={{ color: '#76d0a3' }}>
      <div>container</div>
      <Usual {...this.props} />
    </div>);
  }
}

export default StyleContainer;
