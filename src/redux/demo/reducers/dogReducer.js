import { dogType } from '../types';

const initialState = {
  data: undefined,
  isLoading: false,
  error: undefined
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
  case dogType.GET_DOG_REQUEST:
    return {
      ...state,
      isLoading: true
    };
  case dogType.GET_DOG_SUCCESS:
    return {
      ...state,
      isLoading: false,
      data: action.data
    };
  case dogType.GET_DOG_FAILURE:
    return {
      ...state,
      isLoading: false,
      error: action.error
    };
  default:
    return state;
  }
};

export default reducer;
