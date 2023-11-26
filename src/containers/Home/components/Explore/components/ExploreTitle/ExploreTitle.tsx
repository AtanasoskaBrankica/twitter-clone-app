import styled from 'styled-components';

interface Props {
  title: string;
}

export const ExploreTitle = ({title}: Props) => {
  return (
    <Styled.Container>
      <Styled.TitleWrapper>{title}</Styled.TitleWrapper>
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
    font-size: 1.5rem;
    margin-left: 8px;
    font-weight: bold;
    color: ${props => props.theme.Aside.wrapperOne.title.color};
  `,
};
