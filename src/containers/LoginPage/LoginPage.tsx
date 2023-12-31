import {useContext, useEffect} from 'react';
import {useForm} from 'react-hook-form';
import {Navigate} from 'react-router-dom';
import styled from 'styled-components';
import Button from '../../components/Button/Button';
import {AuthContext} from '../../contexts/AuthContext';
import {FaTwitter} from 'react-icons/fa';

interface FormProps {
  username: string;
  password: string;
}

export const LoginPage = () => {
  const {login, error, loading, userIsLoggedIn} = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    setError,
    formState: {errors},
  } = useForm<FormProps>();

  useEffect(() => {
    if (error) {
      setError('username', {
        type: 'value',
        message: 'Username is not correct',
      });
    }
  }, [error]);

  const onSubmit = (data: FormProps) => {
    login(data);
  };

  if (userIsLoggedIn) {
    return <Navigate to="/" />;
  }
  return loading ? (
    <p style={{color: 'white'}}>Loading</p>
  ) : (
    <Styled.Container onSubmit={handleSubmit(onSubmit)}>
      <Styled.IconWrapper>
        <FaTwitter size={45} />
      </Styled.IconWrapper>
      <Styled.Title>Sign in to Twitter</Styled.Title>
      <Styled.Input
        type="text"
        {...register('username', {
          required: 'Username is required',
        })}
        placeholder="Please enter your username"
      />
      {errors.username?.message ? (
        <Styled.Error>{errors.username?.message}</Styled.Error>
      ) : null}
      <Styled.Input
        type="password"
        {...register('password', {
          required: 'Password is required',
        })}
        placeholder="Please enter your password"
      />
      {errors.password?.message ? (
        <Styled.Error>{errors.password?.message}</Styled.Error>
      ) : null}

      <Button
        backgroundColor="grey"
        margin="10px"
        type="submit"
        name="Log in"
        textColor="black"
        width="300px"
        disabled={!!Object.keys(errors).length}
      />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 7%;
    margin-left: 450px;
    width: 500px;
    height: 657px;
    background: black;
  `,
  IconWrapper: styled.div`
    color: lightgrey;
    margin-top: 30px;
    margin-bottom: 20px;
  `,
  Title: styled.h1`
    color: lightgrey;
    font-weight: bold;
    margin-bottom: 50px;
    margin-top: 10px;
    font-size: 2rem;
  `,
  Input: styled.input`
    border: 1px solid lightgrey;
    margin-top: 20px;
    background: black;
    width: 300px;
    height: 50px;
    color: white;
    padding-bottom: 10px;
    &::placeholder {
      color: lighthrey;
      font-size: 15px;
      padding-left: 8px;
      font-family: Quicksand;
    }
  `,
  Error: styled.span`
    color: red;
    font-size: 14px;
  `,
};
