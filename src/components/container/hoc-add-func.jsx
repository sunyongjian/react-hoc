import React, { Component } from 'react';

const addFunc = WrappedComponent => class extends Component {
  handleClick() {
    console.log('click');
  }
  render() {
    const props = {
      ...this.props,
      handleClick: this.handleClick,
    };
    return <WrappedComponent {...props} />;
  }
};

export default addFunc;
