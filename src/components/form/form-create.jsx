import React, { Component } from 'react';

const formCreate = WrappedComponent => class extends Component {
  
  constructor() {
    super();
    this.state = {
      fields: {},
    }
  }

  onChange = key => e => {
    this.setState({
      fields: {
        ...this.state.fields,
        [key]: e.target.value,
      }
    })
  }
  
  handleSubmit = () => {
    console.log(this.state.fields);
  }

  getField = fieldName => {
    return {
      onChange: this.onChange(fieldName),
    }
  }

  render() {
    const props = {
      ...this.props,
      handleSubmit: this.handleSubmit,
      getField: this.getField,
    }

    return (<WrappedComponent
      {...props}
    />);
  }
  };
export default formCreate;
