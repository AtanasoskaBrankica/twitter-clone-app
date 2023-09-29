import actionCreatorFactory from 'typescript-fsa';
import {Post} from './posts.types';

const actionCreator = actionCreatorFactory('POSTS');

export const setPosts = actionCreator<Record<number, Post>>('SET_POSTS');
