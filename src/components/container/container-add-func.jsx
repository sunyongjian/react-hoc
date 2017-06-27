import React, { Component } from 'react';
import StyleContainer from './container-add-style';

class FuncContainer extends Component {
  handleClick() {
    console.log('click');
  }

  render() {
    const props = {
      ...this.props,
      handleClick: this.handleClick,
    };
    return (<StyleContainer {...props} />);
  }
}

export default FuncContainer;
