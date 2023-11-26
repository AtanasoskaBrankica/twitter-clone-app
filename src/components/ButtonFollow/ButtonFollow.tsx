import React from 'react';
import styled from 'styled-components';

interface Props {
  backgroundColor: string;
  textColor: string;
  name: string;
}

export const ButtonFollow = ({backgroundColor, textColor, name}: Props) => {
  return (
    <Styled.Button backgroundColor={backgroundColor} textColor={textColor}>
      {name}
    </Styled.Button>
  );
};

const Styled = {
  Button: styled.button<{backgroundColor: string; textColor: string}>`
    background: ${props => props.backgroundColor}
    color: ${props => props.textColor}
    width: 90px;
    border-radius: 20px;
    padding: 5px 20px;
    font-weight: bold;
    border:none;
  `,
};
