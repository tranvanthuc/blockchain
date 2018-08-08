import React, { Component } from 'react';
import Form from './components/Form';

class Register extends Component {
  onSubmit = values => {
    console.log(values);
  };

  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <Form onSubmit={this.onSubmit} />
      </div>
    );
  }
}

export default Register;
