import {useReducer, useRef, useState} from 'react';
import type {CommentType} from '../containers/PostPage/types';

type Action =
  | {
      type: 'POST_COMMENT_SUCCESS';
      payload: {
        comment: string;
        loading: boolean;
        error: boolean;
      };
    }
  | {
      type: 'POST_COMMENT_ERROR';
      payload: {
        comment: string;
        loading: boolean;
        error: true;
      };
    }
  | {
      type: 'POSTING_IS_LOADING';
      payload: {
        comment: string;
        loading: true;
        error: boolean;
      };
    }
  | {
      type: 'UPDATE_COMMENT';
      payload: {
        comment: string;
        loading: false;
        error: false;
      };
    };

interface State {
  comment: string;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE: State = {
  comment: '',
  loading: false,
  error: false,
};

const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'POST_COMMENT_SUCCESS':
      return {
        comment: action.payload.comment,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'POST_COMMENT_ERROR':
      return {
        comment: action.payload.comment,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'POSTING_IS_LOADING':
      return {
        comment: action.payload.comment,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'UPDATE_COMMENT':
      return {
        comment: action.payload.comment,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
  console.log('state', state);
};

export const usePostComment = () => {
  const [postedComment, setPostedComment] = useState<CommentType>(
    {} as CommentType
  );
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const someRef = useRef<HTMLTextAreaElement>(null);

  const postComment = async () => {
    const text = someRef?.current?.value;
    try {
      dispatch({
        type: 'POSTING_IS_LOADING',
        payload: {
          comment: '',
          loading: true,
          error: false,
        },
      });
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/comments',
        {
          method: 'POST',
          body: JSON.stringify({
            body: text,
            userId: 1,
          }),
          headers: {
            'Content-type': 'application/json; charset=UTF-8',
          },
        }
      );

      const data = await response.json();
      setPostedComment(data);
      dispatch({
        type: 'POST_COMMENT_SUCCESS',
        payload: {
          comment: data,
          loading: false,
          error: false,
        },
      });
    } catch (error: any) {
      dispatch({
        type: 'POST_COMMENT_ERROR',
        payload: {
          comment: '',
          loading: false,
          error: true,
        },
      });
    }
  };

  return {
    comment: state.comment,
    error: state.error,
    loading: state.loading,
    postComment,
    setComment: (comment: string) =>
      dispatch({
        type: 'UPDATE_COMMENT',
        payload: {
          comment: comment,
          loading: false,
          error: false,
        },
      }),
    postedComment,
    someRef,
  };
};
