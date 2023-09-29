import {createSelector} from 'reselect';
import {GlobalState} from '../types';

const userState = (state: GlobalState) => {
  return state.user;
};
export const userSelector = createSelector(userState, state => state.user);
export const errorSelector = createSelector(userState, state => state.error);
export const loadingSelector = createSelector(
  userState,
  state => state.loading
);
export const userIsLoggedInSelector = createSelector(
  userState,
  state => state.userIsLoggedIn
);
