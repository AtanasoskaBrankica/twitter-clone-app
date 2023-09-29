import {UserState} from './user.types';
import {isType} from 'typescript-fsa';
import * as actions from './user.actions';
import {Action} from 'redux';

const INITIAL_STATE: UserState = {
  userIsLoggedIn: false,
  loading: false,
  error: '',
};

export const userReducer = (
  state: UserState = INITIAL_STATE,
  action: Action
): UserState => {
  if (isType(action, actions.loginInProgress)) {
    return {
      loading: true,
      error: '',
      userIsLoggedIn: false,
    };
  }

  if (
    isType(action, actions.loginSuccess) ||
    isType(action, actions.getUser) ||
    isType(action, actions.registerSuccess)
  ) {
    return {
      loading: false,
      user: action.payload.user,
      error: '',
      userIsLoggedIn: true,
    };
  }

  if (
    isType(action, actions.loginUnsuccess) ||
    isType(action, actions.registerUnsuccess)
  ) {
    return {
      loading: false,
      error: action.payload.error,
      user: undefined,
      userIsLoggedIn: false,
    };
  }

  if (
    isType(action, actions.resetState) ||
    isType(action, actions.logoutSuccess) ||
    isType(action, actions.getUserUnsuccess)
  ) {
    return {
      loading: false,
      error: '',
      user: undefined,
      userIsLoggedIn: false,
    };
  }

  if (isType(action, actions.logoutUnsuccess)) {
    return {
      ...state,
      loading: false,
      error: action.payload.error,
      userIsLoggedIn: true,
    };
  }

  if (isType(action, actions.loading)) {
    return {
      ...state,
      loading: action.payload,
    };
  }
  return state;
};
