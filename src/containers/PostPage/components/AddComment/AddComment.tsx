import {useEffect} from 'react';
import styled from 'styled-components';
import type {CommentType} from '../../types';
import Button from '../../../../components/Button/Button';
import {usePostComment} from '../../../../hooks/usePostComment';
import {useForm} from 'react-hook-form';

interface Props {
  addNewComment: (comment: CommentType) => void;
}

export const AddComment = ({addNewComment}: Props) => {
  const {error, loading, postComment, postedComment, someRef} =
    usePostComment();

  const {
    handleSubmit,
    formState: {errors},
  } = useForm();

  useEffect(() => {
    addNewComment(postedComment);
  }, [postedComment]);

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
    postComment();
  };

  return (
    <Styled.Container>
      <Styled.Avatar src="https://i.pravatar.cc/100" />
      <Styled.Form onSubmit={handleSubmit(data => onSubmit(data as String))}>
        <Styled.TextArea
          maxLength={280}
          ref={someRef}
          placeholder={'Tweet your reply'}
        ></Styled.TextArea>
        <Button
          type="submit"
          backgroundColor="rgb(29,155,240)"
          name="Reply"
          textColor="white"
          width="100px"
          margin="30px 0px 0px 70px"
        />
      </Styled.Form>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    border-top: 1px solid lightgrey;
    margin-bottom: 50px;
    height: 100px;
  `,
  Avatar: styled.img`
    height: 60px;
    width: 60px;
    border-radius: 50%;
    margin: 10px 0 0 10px;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    height: 100%;
    width: 100%;
  `,
  TextArea: styled.textarea`
    height: 80px;
    width: 380px;
    background: transparent;
    color: ${props => props.theme.Main.tweet.color};
    resize: none;
    border: none;
    margin-top: 20px;
    margin-left: 20px;

    font-size: 20px;
    &::placeholder {
      color: ${props => props.theme.Main.tweet.color};
      font-size: 30px;
      font-family: Quicksand;
    }
  `,
};
