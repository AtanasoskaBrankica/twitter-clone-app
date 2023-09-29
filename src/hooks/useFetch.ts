import {useEffect, useState} from 'react';
import {useDispatch} from 'react-redux';
import type {PostType} from '../containers/Home/components/Main/types';
import {setPosts} from '../state/posts/posts.actions';

export const useFetch = (
  url: string,
  initialState: PostType[]
): {
  data: PostType[];
  fetchFromApi: () => Promise<void>;
  addNewTweet: (post: PostType) => void;
} => {
  const formatData = (data: PostType[]): Record<number, PostType> => {
    //@ts-ignore
    return data.reduce((acc, curr) => {
      const tmp = {};
      //@ts-ignore
      tmp[curr.id] = curr;
      return {...acc, ...tmp};
    }, {} as Record<number, PostType>);
  };
  const [data, setData] = useState<PostType[]>(initialState);
  const dispatch = useDispatch();

  const fetchFromApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    const formattedData = formatData(data);
    dispatch(setPosts(formattedData));
  };

  const addNewTweet = (post: PostType) => {
    setData(prevState => [post, ...prevState]);
  };
  return {data, fetchFromApi, addNewTweet};
};
