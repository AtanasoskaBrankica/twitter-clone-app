import {Action} from 'redux';
import {isType} from 'typescript-fsa';
import {setPosts} from './posts.actions';
import {PostsState} from './posts.types';

const INITIAL_STATE: PostsState = {
  byId: {},
};

export const postsReducer = (
  state: PostsState = INITIAL_STATE,
  action: Action
): PostsState => {
  if (isType(action, setPosts)) {
    return {
      byId: {
        ...state.byId,
        ...action.payload,
      },
    };
  }
  return state;
};
