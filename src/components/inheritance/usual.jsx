import React, { Component } from 'react';
import hijackRenderHoc from './hijack-render';
import iiHoc from './ii-hoc';

@hijackRenderHoc({type: 'add-style', style: { color: 'red'}})
@iiHoc
export default class Usual extends Component {
  static log() {
    console.log('log')
  }
  constructor() {
    super();
    this.state = {
      usual: 'usual',
    }
  }

  componentDidMount() {
    console.log('didMount')
  }

  render() {
    return (
      <div>
        Usual
      </div>
    )
  }
}