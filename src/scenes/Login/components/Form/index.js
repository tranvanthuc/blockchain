import React, { Component } from "react";
import { Field, reduxForm } from "redux-form";
import { Link } from "react-router-dom";
import { renderTextField } from "components/MaterialForm";
import { withStyles } from "@material-ui/core/styles";
import {
  Paper,
  Typography,
  Grid,
  Button,
  Icon,
  TextField,
  InputAdornment
} from "@material-ui/core";
import { FaLock, FaChevronCircleRight } from "react-icons/fa";
import validate from "./validate";
import styles from "./style";
import "./style.scss";
import { IoMdLock } from "react-icons/io";

class FormLogin extends Component {
  render() {
    const { handleSubmit, pristine, reset, submitting, classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Paper className={classes.paper}>
            <Typography
              variant="headline"
              align="center"
              component="h1"
              className="login-header"
            >
              Login
            </Typography>

            <Typography className="mt-1" component="h6">
              Please check that you are visiting https://bit.com
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
                      <IoMdLock className={classes.icon} />
                    </InputAdornment>
                  )
                }}
              />

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
                <Typography align="right" component="h6" className="mt-5">
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
                  Send
                  <FaChevronCircleRight />
                </Button>
              </Grid>
              <Typography align="center" component="h6">
                Not on bit yet? <Link to="/register">Register</Link>
              </Typography>
            </form>
          </Paper>
        </Grid>
      </div>
    );
  }
}
FormLogin = withStyles(styles)(FormLogin);

export default reduxForm({
  form: "fLogin",
  validate
})(FormLogin);
