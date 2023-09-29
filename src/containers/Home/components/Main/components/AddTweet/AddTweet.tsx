import React, {useContext} from 'react';
import styled from 'styled-components';
import Button from '../../../../../../components/Button/Button';

import {
  FaRegImage,
  FaGift,
  FaPoll,
  FaPollH,
  FaSmile,
  FaTasks,
  FaMapMarkerAlt,
} from 'react-icons/fa';
import {usePostTweet} from '../../../../../../hooks/usePostTweet';
import {useForm} from 'react-hook-form';
import {PostType} from '../../types';

export const AddTweet = () => {
  const {tweet, error, loading, postTweet, setTweet, someRef} = usePostTweet();

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm();

  if (error) {
    return (
      <div>
        <p>{error}</p>
      </div>
    );
  }

  if (loading) {
    return (
      <div>
        <p style={{color: 'white'}}>Loading</p>
      </div>
    );
  }

  const onSubmit = (data: String) => {
    postTweet();
  };

  return (
    <Styled.Container>
      <Styled.Avatar src="https://i.pravatar.cc/100" />
      <Styled.Form onSubmit={handleSubmit(data => onSubmit(data as String))}>
        <Styled.TextArea
          maxLength={280}
          ref={someRef}
          placeholder={"Whats's happening?"}
        ></Styled.TextArea>
        <Styled.ActionsWrapper>
          <Styled.IconsWrapper>
            <Styled.Icon>
              <FaRegImage color="rgb(29,155,240)" size={22} />
            </Styled.Icon>
            <Styled.Icon>
              <FaGift color="rgb(29,155,240)" size={22} />
            </Styled.Icon>
            <Styled.Icon>
              <FaPoll color="rgb(29,155,240)" size={22} />
            </Styled.Icon>
            <Styled.Icon>
              <FaSmile color="rgb(29,155,240)" size={22} />
            </Styled.Icon>
            <Styled.Icon>
              <FaTasks color="rgb(29,155,240)" size={22} />
            </Styled.Icon>
            <Styled.Icon>
              <FaMapMarkerAlt color="rgb(29,155,240)" size={22} />
            </Styled.Icon>
          </Styled.IconsWrapper>
          <Button
            type="submit"
            backgroundColor="rgb(29,155,240)"
            name="Tweet"
            textColor="white"
            width="150px"
          />
        </Styled.ActionsWrapper>
      </Styled.Form>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    margin-bottom: 50px;
    height: 150px;
  `,
  Avatar: styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 10px 0 0 10px;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    height: 100%;
    width: 100%;
    margin-left: 10px;
  `,
  TextArea: styled.textarea`
    height: 100%;
    width: 100%;
    background: transparent;
    color: ${props => props.theme.Main.tweet.color};
    resize: none;
    border: none;
    &::placeholder {
      color: ${props => props.theme.Main.tweet.color};
      font-size: 30px;
      padding-top: 15px;
      font-family: Quicksand;
    }
  `,
  ActionsWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100%;
    margin-bottom: -35px;
  `,
  IconsWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
  Icon: styled.div`
    margin-right: 20px;
  `,
};
