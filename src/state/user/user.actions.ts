import actionCreatorFactory from 'typescript-fsa';
import {User} from './user.types';

const actionCreator = actionCreatorFactory('USER');

export const loginInProgress = actionCreator('LOGIN_IN_PROGRESS');

export const loginSuccess = actionCreator<{user: User}>('LOGIN');

export const loginUnsuccess = actionCreator<{error: string}>('LOGIN_UNSUCCESS');

export const resetState = actionCreator('RESET_STATE');

export const logoutSuccess = actionCreator('LOGOUT_SUCCESS');
export const loading = actionCreator<boolean>('LOADING');
export const logoutUnsuccess = actionCreator<{error: string}>(
  'LOGOUT_UNSUCCESS'
);

export const getUser = actionCreator<{user: User}>('GET_USER');
export const getUserUnsuccess = actionCreator<{error: string}>(
  'GET_USER_UNSUCCESS'
);
export const registerSuccess = actionCreator<{user: User}>('REGISTER_SUCCESS');
export const registerUnsuccess = actionCreator<{error: string}>(
  'REGISTER_UNSUCCESS'
);
