import React, { Component } from 'react';
import Form from './components/Form';

class SendFuns extends Component {
  onSubmit = values => {
    console.log(values);
  };

  render() {
    return (
      <div>
        <Form onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default SendFuns;
