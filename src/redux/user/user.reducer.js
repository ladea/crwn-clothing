import {
  SIGN_IN_SUCCESS,
  SIGN_IN_FAILURE,
  SIGN_OUT_SUCCESS,
  SIGN_OUT_FAILURE,
  SIGN_UP_FAILURE,
  SIGN_UP_SUCCESS,
} from './user.types';

const initialState = {
  currentUser: null,
  error: null,
};

const userReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        currentUser: payload,
        error: null,
      };

    case SIGN_OUT_SUCCESS:
      return {
        ...state,
        error: null,
        currentUser: null,
      };

    case SIGN_UP_FAILURE:
    case SIGN_IN_FAILURE:
    case SIGN_OUT_FAILURE:
      return {
        ...state,
        error: payload,
      };

    default:
      return state;
  }
};

export default userReducer;
