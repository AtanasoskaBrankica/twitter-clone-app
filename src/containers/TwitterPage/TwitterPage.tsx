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
            onClick={() => {
              navigate('/register');
            }}
          />
        </Styled.ButtonWrapper>
        <Styled.Wrapper>
          <Styled.TitleLogin>Already have an account?</Styled.TitleLogin>
          <Styled.SignIn
            href="#"
            onClick={() => {
              navigate('/login');
            }}
          >
            Sign in
          </Styled.SignIn>
        </Styled.Wrapper>
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
    height: 657px;
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
    font-size: 50px;
    font-weight: bold;
    margin-top: 100px;
    margin-left: 50px;
    color: lightgrey;
  `,
  Title: styled.h2`
    color: lightgrey;
    font-size: 20px;
    font-weight: bold;
    margin-left: 50px;
    margin-top: 60px;
  `,
  TitleLogin: styled.h4`
    margin-left: 50px;
    margin-top: 10px;
    color: white;
    font-weight: bold;
    font-size: 0.8rem;
  `,
  ButtonWrapper: styled.div`
    margin-left: 40px;
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
  SignIn: styled.a`
    color: rgb(29, 155, 240);
    &:hover {
      text-decoration: none;
    }
    cursor: pointer;
    margin-top: 8px;
    margin-left: 5px;
    font-weight: bold;
    font-size: 0.8rem;
  `,
};
