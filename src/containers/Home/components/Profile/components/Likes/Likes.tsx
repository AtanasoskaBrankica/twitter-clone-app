import styled from 'styled-components';

export const Likes = () => {
  return (
    <Styled.Container>
      <Styled.Title>You don’t have any likes yet</Styled.Title>
      <Styled.Text>
        Tap the heart on any Tweet to show it some love. When you do, it’ll show
        up here.
      </Styled.Text>
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
    height: 300px;
    width: 100%;
  `,
  Title: styled.h1`
    font-weight: bold;
    font-size: 1.7rem;
    color: ${props => props.theme.Profile.text.color};
  `,
  Text: styled.p`
    font-size: 17px;
    color: ${props => props.theme.Profile.otherText.color};
  `,
};
