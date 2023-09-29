import styled from 'styled-components';
import {setSyntheticLeadingComments} from 'typescript';
import {UserMessage} from '../UserMessage/UserMessage';

export const MessageCard = () => {
  return (
    <Styled.Container>
      <UserMessage
        nameAndlastname="Sahar Darya"
        username="@SaharDarya988"
        messageContent=" Are we meeting today? Project has been already..."
        when="April 3, 2022"
      />
      <UserMessage
        nameAndlastname="Bob Frapples"
        username="@Frapples"
        messageContent="Yes, Going good! Can we have a disscussion for..."
        when="April 1, 2022"
      />
      <UserMessage
        nameAndlastname="John Smith"
        username="@JohnSmith74"
        messageContent="Yeah, I fixed that. Everything looks good. I'm..."
        when="March 27, 2022"
      />
      <UserMessage
        nameAndlastname="Gavin Free"
        username="@Gavin43"
        messageContent="Sales want to see you. Something about the..."
        when="January 20, 2022"
      />
      <UserMessage
        nameAndlastname="Geoff Ramsey"
        username="@GeoffRamsey_1"
        messageContent="Hey, what does this error mean? I would be..."
        when="January 15, 2022"
      />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
  `,
  Avatar: styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: 10px;
  `,
};
