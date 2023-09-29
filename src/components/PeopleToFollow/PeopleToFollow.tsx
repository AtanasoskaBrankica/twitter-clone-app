import React from 'react';
import styled from 'styled-components';
import {ButtonFollow} from '../ButtonFollow/ButtonFollow';

interface Props {
  name?: string;
  username?: string;
  content?: string;
}

export const PeopleToFollow = ({name, username, content}: Props) => {
  return (
    <Styled.Container>
      <Styled.TextWrapper>
        <Styled.Avatar src="https://i.pravatar.cc/100" />
        <Styled.AccountWrapper>
          <Styled.Name>{name}</Styled.Name>
          <Styled.Username>{username}</Styled.Username>
          <Styled.Content>{content}</Styled.Content>
        </Styled.AccountWrapper>
      </Styled.TextWrapper>
      <Styled.ButtonWrapper>
        <ButtonFollow backgroundColor="white" textColor="black" name="Follow" />
      </Styled.ButtonWrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    justify-content: space-between;
    height: 50px;
    margin-bottom: 20px;
  `,
  TextWrapper: styled.div`
    display: flex;
    height: 50px;
    padding-left: 10px;
  `,
  Avatar: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 5px;
  `,
  ImageWrapper: styled.img`
    display: flex;
    height: 50px;
    flex: 1;
  `,
  AccountWrapper: styled.div`
    display: flex;
    flex-direction: column;
    height: 50px;
    flex: 2;
    padding-left: 10px;
  `,
  Name: styled.div`
    display: flex;
    font-weight: bold;
    color: ${props => props.theme.Aside.wrapperTwo.accountName.color};
    font-size: 20px;
  `,
  Username: styled.div`
    display: flex;
    font-size: 13px;
    color: grey;
  `,
  ButtonWrapper: styled.div`
    display: flex;
    align-items: center;
    height: 50px;
    font-size: 17px;
    font-weight: bold;
    padding-right: 10px;
  `,
  Content: styled.p`
    font-size: 17px;
    color: ${props => props.theme.Aside.wrapperTwo.accountName.color};
  `,
};
