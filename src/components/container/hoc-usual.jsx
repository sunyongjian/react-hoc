import React, { Component } from 'react';
import addStyle from './hoc-add-style';
import addFunc from './hoc-add-func';
import Usual from './usual';
import { compose } from '../../utils';

// const WrappenComponent = addStyle(addFunc(Usual));
const WrappenComponent = compose(addFunc, addStyle)(Usual);

class WrappedUsual extends Component {

  render() {
    console.log(this.props, 'props');
    return (<div>
      <WrappenComponent />
    </div>);
  }
}

export default WrappedUsual;
