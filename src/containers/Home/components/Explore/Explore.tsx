import {useContext} from 'react';
import styled from 'styled-components';
import {PageWrapper} from '../../../../components/PageWrapper/PageWrapper';
import {ShowMore} from '../../../../components/ShowMore/ShowMore';
import {TitleTopic} from '../../../../components/TitleTopic/TitleTopic';
import {Topic} from '../../../../components/Topic/Topic';
import {TweetsContext} from '../../../../contexts/TweetsContext';
import {Main} from '../Main/Main';
import {CoverImage} from './components/CoverImage/CoverImage';
import {ExploreTitle} from './components/ExploreTitle/ExploreTitle';
import {News} from './components/News/News';
import {PostsByCategory} from './components/PostsByCategory/PostsByCategory';
import {FaCog} from 'react-icons/fa';
import {SearchInput} from '../../../../components/SearchInput/SearchInput';

export const Explore = () => {
  return (
    <PageWrapper>
      <Styled.Container className="col-6">
        <Styled.TopWrapper>
          <SearchInput placeholderText="Search Twitter" />
          <Styled.IconWrapper>
            <FaCog size={25} />
          </Styled.IconWrapper>
        </Styled.TopWrapper>
        <CoverImage />
        <Styled.TrendsWrapper>
          <ExploreTitle title="Trends for you" />
          <Topic
            description="Sports Trending"
            title="Macedonia"
            number="27K Tweets"
          />
          <Topic
            description="Politics Trending"
            title="Germany"
            number="94.4K Tweets"
          />
          <Topic
            description="Politics Trending"
            title="Russia"
            number="928K Tweets"
          />
          <Topic
            description="Sports Trending"
            title="Italy"
            number="62.4K Tweets"
          />
          <Topic
            description="Trending in North Macedonia"
            title="Portugal"
            number="86.9K Tweets"
          />
          <ShowMore desc="Show more" />
        </Styled.TrendsWrapper>
        <Styled.NewsWrapper>
          <ExploreTitle title="What's Happening?" />
          <News />
        </Styled.NewsWrapper>
        <Styled.PostWrapper>
          <ExploreTitle title="Football" />
          <PostsByCategory />
        </Styled.PostWrapper>
        <Styled.PostWrapper>
          <ExploreTitle title="Viral Tweets" />
          <PostsByCategory />
        </Styled.PostWrapper>
        <Styled.PostWrapper>
          <ExploreTitle title="Funny Tweets" />
          <PostsByCategory />
        </Styled.PostWrapper>
      </Styled.Container>
    </PageWrapper>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.Main.background};
  `,
  TopWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
  TrendsWrapper: styled.div`
    margin-bottom: 20px;
    margin-top: 20px;
    border-bottom: 1px solid lightgrey;
  `,
  NewsWrapper: styled.div`
    margin-bottom: 20px;
    margin-left: 10px;
    border-bottom: 1px solid lightgrey;
  `,
  PostWrapper: styled.div`
    border-bottom: 1px solid lightgrey;
  `,
  IconWrapper: styled.div`
    margin-top: 10px;
  `,
};
