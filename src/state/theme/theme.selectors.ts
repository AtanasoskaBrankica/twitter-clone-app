import {createSelector} from 'reselect';
import {GlobalState} from '../types';
import {ThemeState} from './theme.types';

const themeState = (state: GlobalState) => state.theme;

export const themeSelector = createSelector(
  themeState,
  themeState => themeState.theme
);
