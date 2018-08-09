import { dogType } from '../types';

export const getDogRequest = () => {
  return {
    type: dogType.GET_DOG_REQUEST
  };
};

export const getDogSuccess = data => {
  return {
    type: dogType.GET_DOG_SUCCESS,
    data: data
  };
};

export const getDogFailure = error => {
  return {
    type: dogType.GET_DOG_FAILURE,
    error: error
  };
};

export default {
  getDogRequest,
  getDogSuccess,
  getDogFailure
};
