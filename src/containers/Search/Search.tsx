import styled from 'styled-components';
import {FaCog, FaSearch} from 'react-icons/fa';
import {TitleTopic} from '../../components/TitleTopic/TitleTopic';
import {Topic} from '../../components/Topic/Topic';
import {ShowMore} from '../../components/ShowMore/ShowMore';
import {PeopleToFollow} from '../../components/PeopleToFollow/PeopleToFollow';

export const Search = () => {
  return (
    <Styled.Container className="col-3">
      <Styled.SearchWrapper>
        <Styled.SearchIcon>
          <FaSearch size={23} />
          <Styled.SearchInput
            type="text"
            placeholder="Search Twitter"
          ></Styled.SearchInput>
        </Styled.SearchIcon>
      </Styled.SearchWrapper>
      <Styled.WrapperOne>
        <TitleTopic title="Topics for you" icon={<FaCog size={20} />} />
        <Topic
          description="Trending in USA"
          title="#RejectedAmazonPrimeBenefits"
          number="1,070 Tweets"
        />
        <Topic
          description="Trending in USA"
          title="#ScamBlockParty"
          number="2,108 Tweets"
        />
        <Topic
          description="Trending in USA"
          title="#PrimeDayStrike"
          number="4,391 Tweets"
        />
        <Topic
          description="Trending in USA"
          title="#SocialMediaSlavery"
          number="6,074 Tweets"
        />
      </Styled.WrapperOne>
      <Styled.WrapperTwo>
        <TitleTopic title="Who to follow" />
        <PeopleToFollow name="Liv Tyler" username="@Liv Tyler"></PeopleToFollow>
        <PeopleToFollow name="Nia Long" username="@NiaLong"></PeopleToFollow>
        <PeopleToFollow name="Al Pacino" username="@AlPacino"></PeopleToFollow>
        {/* <ShowMore desc="Show more" /> */}
      </Styled.WrapperTwo>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.aside`
    background: ${props => props.theme.Aside.aside.background};
    border-left: 1px solid lightgrey;
  `,
  SearchWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 50px;
    margin-left: 15px;
    margin-top: 15px;
    border-radius: 30px;
    background: ${props => props.theme.Aside.searchInput.background};
    border: 1px solid lightgrey;
  `,
  SearchIcon: styled.div`
    margin-left: 20px;
    margin-top: 10px;
  `,
  SearchInput: styled.input`
    border: none;
    margin-left: 20px;
    background: transparent;
    font-family: Quicksand;
    font-weight: bold;
  `,
  WrapperOne: styled.div`
    background: ${props => props.theme.Aside.wrapperOne.background};
    height: 60vh;
    margin-bottom: 20px;
    margin-top: 20px;
    border-radius: 20px;
    margin-left: 15px;
  `,
  WrapperTwo: styled.div`
    background: ${props => props.theme.Aside.wrapperTwo.background};
    border-radius: 20px;
    height: 40vh;
    margin-left: 15px;
  `,
};
