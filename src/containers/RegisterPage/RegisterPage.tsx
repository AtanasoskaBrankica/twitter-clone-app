import {useForm} from 'react-hook-form';
import styled from 'styled-components';
import {FaTwitter} from 'react-icons/fa';
import Button from '../../components/Button/Button';
import {AuthContext} from '../../contexts/AuthContext';
import {useContext, useEffect} from 'react';
import {Navigate} from 'react-router-dom';

interface FormProps {
  firstName: string;
  lastName: string;
  username: string;
  password: string;
  repeatPassword: string;
  selectedDay: string;
  selectedMonth: string;
  selectedYear: string;
}

export const RegisterPage = () => {
  const {
    register: registerUser,
    userIsLoggedIn,
    error,
  } = useContext(AuthContext);
  const {
    register,
    handleSubmit,
    watch,
    setError,
    formState: {errors},
  } = useForm<FormProps>();

  useEffect(() => {
    if (error) {
      setError('password', {
        type: 'value',
        message: "Password and Repeat Password don't match",
      });
    }
  }, [error]);

  const onSubmit = (data: FormProps) => {
    registerUser(data);
  };

  if (userIsLoggedIn) {
    return <Navigate to="/" />;
  }

  return (
    <Styled.Container onSubmit={handleSubmit(onSubmit)}>
      <Styled.IconWrapper>
        <FaTwitter size={45} />
      </Styled.IconWrapper>
      <Styled.Title>Create your account</Styled.Title>
      <Styled.Input
        type="text"
        {...register('firstName', {
          required: 'First Name is required',
        })}
        placeholder="First Name"
      />
      {errors.firstName?.message ? (
        <Styled.Error>{errors.firstName?.message}</Styled.Error>
      ) : null}
      <Styled.Input
        type="text"
        {...register('lastName', {
          required: 'Last Name is required',
        })}
        placeholder="Last Name"
      />
      {errors.lastName?.message ? (
        <Styled.Error>{errors.lastName?.message}</Styled.Error>
      ) : null}
      <Styled.Input
        type="text"
        {...register('username', {
          required: 'Username is required',
        })}
        placeholder="Username"
      />
      {errors.username?.message ? (
        <Styled.Error>{errors.username?.message}</Styled.Error>
      ) : null}
      <Styled.Input
        type="password"
        {...register('password', {
          required: 'Password is required',
        })}
        placeholder="Password"
      />
      {errors.password?.message ? (
        <Styled.Error>{errors.password?.message}</Styled.Error>
      ) : null}
      <Styled.Input
        type="password"
        {...register('repeatPassword', {
          required: 'Repeat Password is required',
        })}
        placeholder="Repeat Password"
      />
      {errors.repeatPassword?.message ? (
        <Styled.Error>{errors.repeatPassword?.message}</Styled.Error>
      ) : null}

      <Button
        backgroundColor="grey"
        margin="10px"
        type="submit"
        name="Sign up"
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
    margin-left: 500px;
    margin-top: 100px;
    margin-bottom: 100px;
    width: 700px;
    padding-bottom: 50px;
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
  `,
  Input: styled.input`
    border: 1px solid grey;
    margin-top: 20px;
    background: black;
    width: 600px;
    height: 70px;
    color: white;
    padding-bottom: 10px;
    &::placeholder {
      color: lighthrey;
      font-size: 18px;
      padding-left: 8px;
      font-family: Quicksand;
    }
  `,
  Error: styled.span`
    color: red;
    font-size: 14px;
  `,
  FormWrapper: styled.div`
    display: flex;
    flex-direction: row;
    margin-bottom: 30px;
  `,
};
