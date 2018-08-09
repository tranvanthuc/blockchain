import React, { Component } from 'react';
import Form from './components/Form';

class FormLogin extends Component {
  onSubmit = values => {
    console.log(values);
  };

  render() {
    const data = {
      link: 'https://google.com',
      email: 'thuc@gmail.com'
    };
    return (
      <div>
        <Form data={data} onSubmit={this.onSubmit} />
      </div>
    );
  }
}
export default FormLogin;
