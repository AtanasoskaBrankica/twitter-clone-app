import styled from 'styled-components';

interface Props {
  text: string;
  icon: JSX.Element;
}
export const ModalMore = ({text, icon}: Props) => {
  return (
    <Styled.Container>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
      <Styled.TextWrapper>{text}</Styled.TextWrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
    font-size: 20px;
    margin-left: 10px;
    cursor: pointer;
  `,
  IconWrapper: styled.div`
    margin-right: 20px;
  `,
  TextWrapper: styled.div``,
};
