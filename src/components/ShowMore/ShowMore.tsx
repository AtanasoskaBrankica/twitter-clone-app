import styled from 'styled-components';

interface Props {
  desc: string;
}

export const ShowMore = ({desc}: Props) => {
  return <Styled.Container>{desc}</Styled.Container>;
};

const Styled = {
  Container: styled.div`
    display: flex;
    color: #0097d8;
    margin-bottom: 20px;
    padding-left: 10px;
    font-size: 17px;
    padding-left: 20px;
  `,
};
