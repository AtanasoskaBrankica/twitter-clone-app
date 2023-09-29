import {createSelector} from 'reselect';
import {GlobalState} from '../types';

const postsState = (state: GlobalState) => {
  return state.posts;
};

export const getAllPosts = createSelector(postsState, state =>
  Object.values(state.byId)
);

export const getPostById = createSelector(
  postsState,
  (_: GlobalState, id: number) => id,
  (posts, id) => {
    return posts.byId[id];
  }
);
