import {useEffect, useState} from 'react';
import type {CommentType} from '../containers/PostPage/types';
export const useFetchComments = (
  url: string,
  initialState: CommentType[]
): {
  data: CommentType[];
  fetchFromApi: () => Promise<void>;
  addNewComment: (comment: CommentType) => void;
} => {
  const [data, setData] = useState<CommentType[]>(initialState);

  const fetchFromApi = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  };

  const addNewComment = (comment: CommentType) => {
    setData(prevState => [comment, ...prevState]);
  };

  return {data, fetchFromApi, addNewComment};
};
