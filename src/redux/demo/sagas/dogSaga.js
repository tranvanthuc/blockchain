import { takeLatest, call, put } from 'redux-saga/effects';
import { dogType } from '../types';
import axios from 'axios';

function fetchDog() {
  return axios({
    method: 'get',
    url: 'https://dog.ceo/api/breeds/image/random'
  });
}

function* workerSaga() {
  try {
    const response = yield call(fetchDog);
    const dog = response.data.message;
    console.log(dog);

    // dispatch a success action to the store with the new dog
    yield put({ type: dogType.GET_DOG_SUCCESS, data: dog });
  } catch (error) {
    // dispatch a failure action to the store with the error
    yield put({ type: dogType.GET_DOG_FAILURE, error });
  }
}

export default [takeLatest(dogType.GET_DOG_REQUEST, workerSaga)];
