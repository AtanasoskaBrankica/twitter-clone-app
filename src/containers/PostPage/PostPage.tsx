import React, {useEffect, useState} from 'react';
import {useLocation, useParams} from 'react-router-dom';
import {setEnvironmentData} from 'worker_threads';
import {Post} from '../Home/components/Main/components/Post/Post';
import {CommentType} from './types';
import {Comment} from '../PostPage/components/Comment/Comment';
import {PostType} from '../Home/components/Main/types';
import {useFetch} from '../../hooks/useFetch';
import styled from 'styled-components';
import {useFetchComments} from '../../hooks/useFetchComments';

import {useFetchPost} from '../../hooks/useFetchPost';
import {AddComment} from './components/AddComment/AddComment';
import {PageWrapper} from '../../components/PageWrapper/PageWrapper';
import {useSelector} from 'react-redux';
import {getPostById} from '../../state/posts/posts.selectors';
import {GlobalState} from '../../state/types';

export const PostPage = () => {
  const params = useParams();
  const location = useLocation();
  const postt = useSelector((state: GlobalState) =>
    //@ts-ignore
    getPostById(state, +params?.id || 0)
  );
  const {data: post, fetchFromApi: fetchFromApiPost} = useFetchPost<PostType>(
    `https://jsonplaceholder.typicode.com/posts/${params.id}`,
    {} as PostType
  );
  const {
    data: comments,
    fetchFromApi: fetchFromApiComments,
    addNewComment,
  } = useFetchComments(
    `https://jsonplaceholder.typicode.com/posts/${params.id}/comments`,
    []
  );

  useEffect(() => {
    if (!postt) {
    }
  }, [post]);

  useEffect(() => {
    if (!(location?.state as any)?.id) {
      fetchFromApiPost();
    }
  }, [params.id]);

  useEffect(() => {
    fetchFromApiComments();
  }, [params.id]);

  let contentPost;

  if ((location?.state as any)?.id) {
    contentPost = (
      <Post key={(location?.state as any)?.id} {...(location?.state as any)} />
    );
  } else {
    contentPost = <Post key={post.id} {...post} />;
  }

  return (
    <PageWrapper>
      <Styled.Container className="col-6">
        <Styled.Title>Tweet</Styled.Title>
        {contentPost}
        <Styled.CommentWrapper>
          <AddComment addNewComment={addNewComment} />
          {comments.map(comment => {
            return <Comment key={comment.id} {...comment} />;
          })}
        </Styled.CommentWrapper>
      </Styled.Container>
    </PageWrapper>
  );
};

const Styled = {
  Container: styled.main`
    background: ${props => props.theme.Main.background};
  `,
  Title: styled.h1`
    color: ${props => props.theme.Main.color};
    fontsize: 30px;
    font-family: Quicksand;
  `,
  CommentWrapper: styled.div`
    margintop: 60px;
  `,
};
