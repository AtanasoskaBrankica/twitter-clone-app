import {useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import {Action} from '../../../Home/components/Main/components/Post/components/Action';
import {
  FaRegComment,
  FaRetweet,
  FaRegHeart,
  FaShareSquare,
} from 'react-icons/fa';

interface Props {
  name: string;
  email: string;
  body: string;
  id: number;
}

export const Comment = ({name, email, body, id}: Props) => {
  let navigate = useNavigate();

  return (
    <Styled.Container>
      <Styled.AdditionalInfo>{name}</Styled.AdditionalInfo>
      <Styled.Wrapper>
        <Styled.Avatar src="https://i.pravatar.cc/100" />
        <Styled.MainContent>
          <Styled.Title>{email}</Styled.Title>
          <Styled.Content>{body}</Styled.Content>
          <Styled.Actions>
            <Styled.ActionWrapper>
              <FaRegComment size={20} />
              <Action actionNumber={444} />
            </Styled.ActionWrapper>
            <Styled.ActionWrapper>
              <FaRetweet size={20} />
              <Action actionNumber={151} />
            </Styled.ActionWrapper>
            <Styled.ActionWrapper>
              <FaRegHeart size={20} />
              <Action actionNumber={1941} />
            </Styled.ActionWrapper>
            <Styled.ActionWrapper>
              <FaShareSquare size={20} />
              <Action actionNumber={0} />
            </Styled.ActionWrapper>
          </Styled.Actions>
        </Styled.MainContent>
      </Styled.Wrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    border-top: 1px solid lightgrey;
    width: 100%;
    margin-bottom: 20px;
  `,
  AdditionalInfo: styled.span`
    width: 100%;
    color: ${props => props.theme.Main.tweet.color};
  `,
  Wrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 100%;
  `,
  Avatar: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 5px;
  `,
  MainContent: styled.div`
    display: flex;
    flex: 8;
    flex-direction: column;
    margin-left: 10px;
  `,
  Title: styled.h4`
    margin: 0;
    padding: 0;
    color: ${props => props.theme.Main.tweet.color};
    text-align: left;
    font-size: 1.2rem;
  `,
  Content: styled.p`
    color: ${props => props.theme.Main.tweet.color};
  `,
  Actions: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    margin-right: 5px;
  `,
  ActionWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    margin-bottom: 10px;
    color: ${props => props.theme.Main.tweet.actions.color};
  `,
};
