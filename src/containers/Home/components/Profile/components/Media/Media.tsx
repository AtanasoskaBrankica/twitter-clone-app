import styled from 'styled-components';
import Button from '../../../../../../components/Button/Button';

export const Media = () => {
  return (
    <Styled.Container>
      <Styled.Title>You haven't Tweeted any photos or videos yet</Styled.Title>
      <Styled.Text>
        When you send Tweets with photos or videos in them, it will show up
        here.
      </Styled.Text>
      <Button
        backgroundColor="rgb(29,155,240)"
        width="250px"
        name="Tweet a photo or video"
        textColor="white"
        margin="20px 0px 0px 0px"
      ></Button>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 70px;
    margin-left: 30px;
    margin-right: 220px;
    height: 320px;
    width: 100%;
  `,
  Title: styled.h1`
    font-weight: bold;
    font-size: 1.7rem;
    color: ${props => props.theme.Profile.text.color};
  `,
  Text: styled.p`
    font-size: 1rem;
    color: ${props => props.theme.Profile.otherText.color};
  `,
};
