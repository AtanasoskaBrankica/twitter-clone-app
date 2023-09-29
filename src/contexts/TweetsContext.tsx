import React, {useEffect, useState} from 'react';
import {useSelector} from 'react-redux';
import {PostType} from '../containers/Home/components/Main/types';
import {useFetch} from '../hooks/useFetch';
import {getAllPosts} from '../state/posts/posts.selectors';

interface ContextValues {
  tweets: PostType[];
  addNewTweet: (post: PostType) => void;
}

export const TweetsContext = React.createContext<ContextValues>({
  tweets: [],
  addNewTweet: () => {},
});

export const TweetsContextConstructor = ({
  children,
}: {
  children: JSX.Element;
}) => {
  const {fetchFromApi, addNewTweet} = useFetch(
    'https://jsonplaceholder.typicode.com/posts',
    []
  );

  const tweets = useSelector(getAllPosts);

  useEffect(() => {
    fetchFromApi();
  }, []);

  const value = React.useMemo(
    () => ({
      tweets,
      addNewTweet,
    }),
    [tweets]
  );
  return (
    <TweetsContext.Provider value={value}>{children}</TweetsContext.Provider>
  );
};
