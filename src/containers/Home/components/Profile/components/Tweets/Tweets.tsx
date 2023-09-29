import {ShowMore} from '../../../../../../components/ShowMore/ShowMore';
import {TitleTopic} from '../../../../../../components/TitleTopic/TitleTopic';
import styled from 'styled-components';
import {PeopleToFollow} from '../../../../../../components/PeopleToFollow/PeopleToFollow';

export const Tweets = () => {
  return (
    <Styled.Container>
      <TitleTopic title="Who to follow" />
      <Styled.AccountWrapper>
        <PeopleToFollow
          name="Eva Fox"
          username="@EvaFoxU"
          content="Journalist covering Tesla, EV, environmental and crypto news."
        ></PeopleToFollow>
      </Styled.AccountWrapper>
      <Styled.AccountWrapper>
        <PeopleToFollow
          name="Tesla"
          username="@Tesla"
          content="electric cars, giant batteries and solar"
        ></PeopleToFollow>
      </Styled.AccountWrapper>
      <Styled.AccountWrapper>
        <PeopleToFollow
          name="SpaceX"
          username="@SpaceX"
          content="SpaceX designs, manufactures and launches the worl's most advanced rockets and spacecraft"
        ></PeopleToFollow>
      </Styled.AccountWrapper>

      <ShowMore desc="Show more" />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    width: 100%;
    margin-top: 40px;
  `,
  AccountWrapper: styled.div`
    margin-bottom: 50px;
    margin-left: 10px;
  `,
};
