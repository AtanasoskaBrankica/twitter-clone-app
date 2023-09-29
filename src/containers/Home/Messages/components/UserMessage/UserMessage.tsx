import styled from 'styled-components';

interface Props {
  nameAndlastname: string;
  username: string;
  messageContent: string;
  when: string;
}

export const UserMessage = ({
  nameAndlastname,
  username,
  messageContent,
  when,
}: Props) => {
  return (
    <Styled.Container>
      <Styled.Avatar src="https://i.pravatar.cc/100" />
      <Styled.MessageWrapper>
        <Styled.AccountWrapper>
          <Styled.NameAndLastname>{nameAndlastname}</Styled.NameAndLastname>
          <Styled.Username>{username}</Styled.Username>
        </Styled.AccountWrapper>
        <Styled.MessageContent>{messageContent}</Styled.MessageContent>
      </Styled.MessageWrapper>
      <Styled.WhenWrapper>{when}</Styled.WhenWrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 10px;
  `,
  Avatar: styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: 10px;
  `,
  MessageWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 20px;
    margin-top: 10px;
    font-size: 20px;
  `,
  AccountWrapper: styled.div`
    display: flex;
    flex-direction: row;
  `,
  NameAndLastname: styled.span`
    color: ${props => props.theme.Messages.nameAndlastname.color};
    font-weight: bold;
  `,
  Username: styled.span`
    color: ${props => props.theme.Messages.text.color};
  `,
  MessageContent: styled.p`
    color: ${props => props.theme.Messages.text.color};
  `,

  WhenWrapper: styled.span`
    color: grey;
    font-size: 20px;
    margin-left: 220px;
  `,
};
