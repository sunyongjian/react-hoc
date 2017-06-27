import React, { Component } from 'react';

const addStyle = WrappedComponent => class extends Component {

  render() {
    return (<div style={{ color: '#76d0a3' }}>
      <WrappedComponent {...this.props} />
    </div>);
  }
};

export default addStyle;
