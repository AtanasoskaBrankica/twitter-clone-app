import React, {useState} from 'react';
import styled from 'styled-components';

interface Props {
  backgroundColor: string;
  name?: string;
  width?: string;
  textColor?: string;
  onClick?: () => void;
  type?: React.HTMLProps<HTMLButtonElement>['type'];
  margin?: string;
}
const Button = ({
  name,
  width,
  onClick,
  backgroundColor,
  textColor = 'grey',
  type,
  margin,
  ...rest
}: React.HTMLProps<HTMLButtonElement> & Props) => {
  return (
    <button
      {...rest}
      // @ts-ignore
      type={type}
      onClick={onClick}
      style={{
        backgroundColor: backgroundColor,
        color: textColor,
        borderRadius: 25,
        padding: '12px 30px',
        width: width,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        margin: margin,
        fontWeight: 'bold',
      }}
    >
      {name}
    </button>
  );
};

export default Button;
