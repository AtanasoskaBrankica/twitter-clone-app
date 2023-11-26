import styled from 'styled-components';

interface Props {
  title?: string;
  description?: string;
  number?: string;
}

export const Topic = ({title, description, number}: Props) => {
  return (
    <Styled.Container>
      <Styled.Description>{description}</Styled.Description>
      <Styled.Title>{title}</Styled.Title>
      <Styled.TweetsNumber>{number}</Styled.TweetsNumber>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    height: 90px;
    padding-bottom: 10px;
    margin-right: 15px;
    margin-left: 20px;
  `,
  Description: styled.p`
    display: flex;
    flex: 1;
    color: grey;
    font-size: 1rem;
    margin-bottom: 5px;
  `,
  Title: styled.h5`
    display: flex;
    flex: 1;
    color: ${props => props.theme.Aside.wrapperOne.titleTopic.color};
    margin-top: -20px;
    margin-bottom: 0;
    font-size: 1rem;
  `,
  TweetsNumber: styled.span`
    display: flex;
    flex: 1;
    color: grey;
    font-size: 1rem;
    margin-top: -20px;
  `,
};
