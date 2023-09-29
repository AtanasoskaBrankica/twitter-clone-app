import styled from 'styled-components';

interface Props {
  title: string;
  icon?: JSX.Element;
}

export const TitleTopic = ({title, icon}: Props) => {
  return (
    <Styled.Container>
      <Styled.TitleWrapper>{title}</Styled.TitleWrapper>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    margin-bottom: 10px;
  `,
  TitleWrapper: styled.h4`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 20px;
    padding-top: 20px;
    flex: 4;
    height: 50px;
    font-weight: bold;
    color: ${props => props.theme.Aside.wrapperOne.title.color};
  `,
  IconWrapper: styled.div`
    display: flex;
    flex: 1;
    height: 50px;
    padding-top: 20px;
    padding-left: 150px;
  `,
};
