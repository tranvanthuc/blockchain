import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { renderTextField, renderCheckbox } from 'components/MaterialForm';
import { withStyles } from '@material-ui/core/styles';
import { Paper, Typography, Grid, Button } from '@material-ui/core';
import validate from './validate';
import styles from './style';

class FormLogin extends Component {
  componentDidMount() {
    this.props.initialize(this.props.data);
  }

  render() {
    const {
      handleSubmit,
      classes,
    } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Paper className={classes.paper}>
            <Typography
              variant="headline"
              align="center"
              component="h1"
              className="login-header mb-3"
            >
              Register
            </Typography>

            <form onSubmit={handleSubmit}>
              <Grid item xs={12}>
                <Field
                  name="username"
                  type="text"
                  component={renderTextField}
                  fullWidth={true}
                  placeholder="Username"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="email"
                  className={classes.textField}
                  fullWidth={true}
                  component={renderTextField}
                  type="text"
                  placeholder="Email"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="password"
                  className={classes.textField}
                  fullWidth={true}
                  component={renderTextField}
                  type="password"
                  placeholder="Password"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="confirm_password"
                  className={classes.textField}
                  fullWidth={true}
                  component={renderTextField}
                  type="password"
                  placeholder="Confirm assword"
                />
              </Grid>
              <Typography className="my-2" component="h6">
                <Field name="term" component={renderCheckbox} />I agree with
                service Terms & Conditions
              </Typography>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth={true}
                >
                  Register
                </Button>
              </Grid>
              <Typography align="center" component="h6" className="my-2">
                Already have an account? <Link to="/login">Login</Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
      </div>
    );
  }
}
const styleFormLogin = withStyles(styles)(FormLogin);

export default reduxForm({
  form: 'fLogin',
  validate
})(styleFormLogin);
