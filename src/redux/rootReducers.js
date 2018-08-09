import { demoReducers } from './demo';
import { reducer as formReducer } from 'redux-form';
import { combineReducers } from 'redux';

export default combineReducers({
  demoReducers,
  form: formReducer
});
