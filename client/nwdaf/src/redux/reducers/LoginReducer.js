import { LOGIN_SUCCESS, LOGIN_FAIL } from "../actionTypes/LoginActionType";

const initialState = {
  error: {},
};

const LoginReducer =  (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_FAIL:
      return {
        ...state,
        error: { ...state.error, ...action.error },
      };
    default:
      return state;
  }
};

export default LoginReducer;
