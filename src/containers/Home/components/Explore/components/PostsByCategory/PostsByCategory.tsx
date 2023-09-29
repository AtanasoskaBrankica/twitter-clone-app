import {useContext} from 'react';
import styled from 'styled-components';
import {TweetsContext} from '../../../../../../contexts/TweetsContext';
import {AddTweet} from '../../../Main/components/AddTweet/AddTweet';
import {Post} from '../../../Main/components/Post/Post';

export const PostsByCategory = () => {
  const {tweets} = useContext(TweetsContext);
  return (
    <Styled.MainContainer>
      <AddTweet />
      {tweets.slice(0, 5).map(post => {
        return <Post key={post.id} {...post} />;
      })}
    </Styled.MainContainer>
  );
};

const Styled = {
  MainContainer: styled.main`
    background: ${props => props.theme.Main.background};
  `,
};
