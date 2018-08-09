import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { connect } from 'react-redux';
import { demoTypes } from '../../redux/demo';

class App extends React.Component {
  render() {
    const { fetching, dog, onRequestDog, error, dogImage } = this.props;

    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">Welcome to Dog Saga</h1>
        </header>

        <img src={dogImage} alt="" />

        {fetching ? (
          <button disabled>Fetching...</button>
        ) : (
          <button onClick={onRequestDog}>Request a Dog</button>
        )}

        {error && <p style={{ color: 'red' }}>Uh oh - something went wrong!</p>}
      </div>
    );
  }
}

const mapStateToProps = state => {
  console.log(state);
  return {
    dogImage: state.demoReducers.dogReducer.data
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onRequestDog: () => dispatch({ type: demoTypes.dogType.GET_DOG_REQUEST })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
