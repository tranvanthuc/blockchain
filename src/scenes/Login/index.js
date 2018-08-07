import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { renderTextField } from "../../components/MaterialForm";
import Form from "./components/Form";

class FormLogin extends Component {
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
export default FormLogin;
