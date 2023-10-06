import { LOGIN_FAIL, LOGIN_SUCCESS } from "../actionTypes/LoginActionType";



export const loginActionSuccess = (loginUserData) => {
  return {
    type: LOGIN_SUCCESS,
    loginUserData: loginUserData,
  };
};

export const loginActionFail = (error) => {
  return {
    type: LOGIN_FAIL,
    error: error,
  };
};