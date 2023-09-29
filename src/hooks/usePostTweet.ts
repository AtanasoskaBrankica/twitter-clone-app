import {useContext, useReducer, useRef} from 'react';
import type {PostType} from '../containers/Home/components/Main/types';
import {TweetsContext} from '../contexts/TweetsContext';

type Action =
  | {
      type: 'POST_TWEET_SUCCESS';
      payload: {
        tweet: string;
        loading: boolean;
        error: boolean;
      };
    }
  | {
      type: 'POST_TWEET_ERROR';
      payload: {
        tweet: string;
        loading: boolean;
        error: true;
      };
    }
  | {
      type: 'POSTING_IS_LOADING';
      payload: {
        tweet: string;
        loading: true;
        error: boolean;
      };
    }
  | {
      type: 'UPDATE_TWEET';
      payload: {
        tweet: string;
        loading: false;
        error: false;
      };
    };

interface State {
  tweet: string;
  loading: boolean;
  error: boolean;
}

const INITIAL_STATE: State = {
  tweet: '',
  loading: false,
  error: false,
};
const reducer = (state: State, action: Action) => {
  switch (action.type) {
    case 'POST_TWEET_SUCCESS':
      return {
        tweet: action.payload.tweet,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'POST_TWEET_ERROR':
      return {
        tweet: action.payload.tweet,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'POSTING_IS_LOADING':
      return {
        tweet: action.payload.tweet,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    case 'UPDATE_TWEET':
      return {
        tweet: action.payload.tweet,
        loading: action.payload.loading,
        error: action.payload.error,
      };
    default:
      return state;
  }
};

export const usePostTweet = () => {
  const {addNewTweet} = useContext(TweetsContext);
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);
  const someRef = useRef<HTMLTextAreaElement>(null);

  const postTweet = async () => {
    const text = someRef?.current?.value;
    try {
      dispatch({
        type: 'POSTING_IS_LOADING',
        payload: {
          tweet: '',
          loading: true,
          error: false,
        },
      });
      const response = await fetch(
        'https://jsonplaceholder.typicode.com/posts',
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
      addNewTweet(data);
      dispatch({
        type: 'POST_TWEET_SUCCESS',
        payload: {
          tweet: data,
          loading: false,
          error: false,
        },
      });
    } catch (error: any) {
      dispatch({
        type: 'POST_TWEET_ERROR',
        payload: {
          tweet: '',
          loading: false,
          error: true,
        },
      });
    }
  };

  return {
    tweet: state.tweet,
    error: state.error,
    loading: state.loading,
    postTweet,
    setTweet: (tweet: string) =>
      dispatch({
        type: 'UPDATE_TWEET',
        payload: {
          tweet: tweet,
          loading: false,
          error: false,
        },
      }),
    someRef,
  };
};
