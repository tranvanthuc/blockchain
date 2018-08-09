import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import { renderTextField } from 'components/MaterialForm';
import { withStyles } from '@material-ui/core/styles';
import {
  Paper,
  Typography,
  Grid,
  Button,
  InputAdornment
} from '@material-ui/core';
import validate from './validate';
import styles from './style';
import './style.scss';
import { Lock } from '@material-ui/icons';

class FormLogin extends Component {
  componentDidMount() {
    this.props.initialize(this.props.data);
  }

  render() {
    const {
      handleSubmit,
      classes,
      data
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
              Login
            </Typography>

            <Typography className="my-2" component="h6">
              Please check that you are visiting {data.link}
            </Typography>
            <form onSubmit={handleSubmit}>
              <Field
                name="link"
                component={renderTextField}
                disabled={true}
                fullWidth={true}
                InputProps={{
                  startAdornment: (
                    <InputAdornment position="start">
                      <Lock className={classes.icon} />
                    </InputAdornment>
                  )
                }}
              />

              <Grid item xs={12}>
                <Field
                  name="user_id"
                  className={classes.textField}
                  fullWidth={true}
                  component={renderTextField}
                  type="text"
                  label="UserID"
                />
              </Grid>
              <Grid item xs={12}>
                <Field
                  name="password"
                  className={classes.textField}
                  fullWidth={true}
                  component={renderTextField}
                  type="password"
                  label="Password"
                />
              </Grid>
              <Grid item xs={12}>
                <Typography align="right" component="h6" className="my-2">
                  <Link to="/#">Forgot password</Link>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  fullWidth={true}
                >
                  Login
                </Button>
              </Grid>
              <Typography align="center" component="h6" className="my-2">
                Not on bit yet? <Link to="/register">Register</Link>
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
