import React from 'react';


const iiHoc = WrappedComponent => class extends WrappedComponent {
    render() {
      console.log(this.state, 'state');
      return super.render();
    }
};

export default iiHoc;