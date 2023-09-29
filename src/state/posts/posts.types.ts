import {NumberLiteralType} from 'typescript';

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export type PostsState = {
  byId: Record<number, Post>;
};