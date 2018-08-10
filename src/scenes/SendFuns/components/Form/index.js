import React, { Component } from 'react';
import { Field, reduxForm } from 'redux-form';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
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
import { CheckCircleSharp, Repeat } from '@material-ui/icons';

class SendFuns extends Component {
  render() {
    const { handleSubmit, classes } = this.props;

    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Paper className={classes.paper}>
            <Typography
              variant="display1"
              color="primary"
              className="font-weight-bold mb-5"
            >
              Send Funs
            </Typography>

            <form onSubmit={handleSubmit}>
              <Typography variant="title" className="mt-3">
                Recipient
              </Typography>
              <Field
                name="recipent"
                component={renderTextField}
                fullWidth={true}
                InputProps={{
                  endAdornment: (
                    <InputAdornment position="end">
                      <CheckCircleSharp className={classes.icon} />
                    </InputAdornment>
                  )
                }}
              />

              <Grid item xs={12}>
                <Typography variant="title" className="mt-3">
                  Withdraw from
                </Typography>
                <Paper className="clearfix my-3 p-2">
                  <div className="float-left">
                    <CheckCircleSharp
                      className={classNames(classes.iconWD, 'float-left')}
                    />{' '}
                    <div className="float-left mt-2">Bitcoin Wallet</div>
                  </div>
                  <div className="float-right text-right">
                    <span>0.0811123112</span> BTC
                    <br />
                    <span className="">=$231.08</span>
                  </div>
                </Paper>
              </Grid>
              {/* withdraw from */}
              <Grid item xs={12}>
                <Typography variant="title" className="mt-3">
                  Amount
                </Typography>
                <Field
                  name="recipient"
                  className={classes.textField}
                  component={renderTextField}
                  type="text"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">USD</InputAdornment>
                    )
                  }}
                />
                <Repeat className={classNames(classes.iconRepeat)} />
                <Field
                  name="recipient"
                  className={classes.textField}
                  component={renderTextField}
                  type="text"
                  InputProps={{
                    endAdornment: (
                      <InputAdornment position="end">LTC</InputAdornment>
                    )
                  }}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="title" className="mt-3">
                  Note
                </Typography>
                <Field
                  name="note"
                  className={classes.textField}
                  component={renderTextField}
                  type="text"
                  placeholder="Optional message"
                  rows={3}
                  multiline={true}
                  fullWidth={true}
                />
              </Grid>
              <Grid item xs={12}>
                <Typography variant="title" className="mt-3 clearfix">
                  <span className="float-left">Network fee</span>
                  <span className="float-right text-muted">
                    0.012310421 BTC ($1.86)
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Typography variant="title" className="mt-3 clearfix">
                  <span className="float-left">Total</span>
                  <span className="float-right text-muted">
                    0.022310421 BTC ($1.86)
                  </span>
                </Typography>
              </Grid>

              <Grid item xs={12}>
                <Button
                  type="submit"
                  variant="contained"
                  color="primary"
                  className="mt-5 "
                  fullWidth={true}
                >
                  continue
                </Button>
              </Grid>
            </form>
          </Paper>
        </Grid>
      </div>
    );
  }
}
const styleSendFuns = withStyles(styles)(SendFuns);

export default reduxForm({
  form: 'fSendFuns',
  validate
})(styleSendFuns);
