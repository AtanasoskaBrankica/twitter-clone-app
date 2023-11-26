import styled from 'styled-components';

export const Mentions = () => {
  return (
    <Styled.Container>
      <Styled.Title>Nothing to see here - yet</Styled.Title>
      <Styled.Text>When someone mentions you, you'll find here.</Styled.Text>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div``,
  Title: styled.h1`
    font-weight: bold;
    margin-left: 150px;
    margin-top: 50px;
    color: ${props => props.theme.Notification.title.color};
    font-size: 2rem;
  `,
  Text: styled.span`
    margin-left: 150px;
    color: grey;
    font-size: 17px;
  `,
};
