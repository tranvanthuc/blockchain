import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { renderTextField } from "components/MaterialForm";
import validate from "./validate";

class FormLogin extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting } = this.props;

    return (
      <div>
        <label htmlFor="login">Login</label>
        <form onSubmit={handleSubmit}>
          <Field
            name="email"
            component={renderTextField}
            type="text"
            placeholder="Email"
          />
          <button type="submit" disabled={submitting}>
            Log In
          </button>
        </form>
      </div>
    );
  }
}

export default reduxForm({
  form: "fLogin",
  validate
})(FormLogin);
