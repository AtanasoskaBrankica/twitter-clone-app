import {url} from 'inspector';
import styled from 'styled-components';
import {FaTwitter} from 'react-icons/fa';
import Button from '../../components/Button/Button';
import {useNavigate} from 'react-router-dom';

export const TwitterPage = () => {
  const navigate = useNavigate();
  return (
    <Styled.Container>
      <Styled.WrapperOne>
        <Styled.IconWrapper>
          <FaTwitter size={400} />
        </Styled.IconWrapper>
      </Styled.WrapperOne>
      <Styled.WrapperTwo>
        <Styled.IconWrapperTwo>
          <FaTwitter size={60} />
        </Styled.IconWrapperTwo>
        <Styled.MainTitle>Happening now</Styled.MainTitle>
        <Styled.Title>Join Twitter today.</Styled.Title>
        <Styled.ButtonWrapper>
          <Button
            backgroundColor="rgb(29,155,240)"
            textColor="white"
            name="Sign up with phone or email"
            width="300px"
            onClick={() => {
              navigate('/register');
            }}
          />
        </Styled.ButtonWrapper>

        <Styled.TitleLogin>Already have an account?</Styled.TitleLogin>
        <Styled.ButtonWrapper>
          <Button
            backgroundColor="black"
            textColor="rgb(29,155,240)"
            name="Sign in"
            width="300px"
            onClick={() => {
              navigate('/login');
            }}
          />
        </Styled.ButtonWrapper>
      </Styled.WrapperTwo>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    width: 100%;
    background: green;
    display: flex;
    flex-direction: row;
    height: 900px;
  `,
  WrapperOne: styled.div`
    display: flex;
    flex: 6;
    background-image: url('https://abs.twimg.com/sticky/illustrations/lohp_en_1302x955.png');
    width: 100%;
  `,
  IconWrapper: styled.div`
    color: white;
    margin-left: 200px;
    margin-top: 200px;
  `,
  WrapperTwo: styled.div`
    background: black;
    display: flex;
    flex-direction: column;
    flex: 6;
  `,
  IconWrapperTwo: styled.div`
    color: lightgrey;
    margin-left: 50px;
    margin-top: 10px;
  `,
  MainTitle: styled.h1`
    font-size: 80px;
    font-weight: bold;
    margin-top: 100px;
    margin-left: 50px;
    color: lightgrey;
  `,
  Title: styled.h2`
    color: lightgrey;
    font-size: 40px;
    font-weight: bold;
    margin-left: 50px;
    margin-top: 60px;
  `,
  TitleLogin: styled.h4`
    margin-left: 70px;
    margin-top: 200px;
    color: white;
    font-weight: bold;
  `,
  ButtonWrapper: styled.div`
    margin-left: 50px;
    margin-
  `,
};
