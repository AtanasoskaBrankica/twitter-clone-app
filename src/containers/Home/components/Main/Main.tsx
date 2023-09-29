import React, {useContext, useState} from 'react';
import {useFetch} from '../../../../hooks/useFetch';
import {Post} from './components/Post/Post';
import type {PostType} from './types';
import {AddTweet} from './components/AddTweet/AddTweet';
import {TweetsContext} from '../../../../contexts/TweetsContext';
import styled from 'styled-components';
import {PageWrapper} from '../../../../components/PageWrapper/PageWrapper';

export const Main = () => {
  const {tweets} = useContext(TweetsContext);
  return (
    <PageWrapper>
      <Styled.MainContainer className="col-6">
        <AddTweet />
        {tweets.map(post => {
          return <Post key={post.id} {...post} />;
        })}
      </Styled.MainContainer>
    </PageWrapper>
  );
};

const Styled = {
  MainContainer: styled.main`
    background: ${props => props.theme.Main.background};
  `,
};
