import styled from 'styled-components';
import {FaStar, FaEllipsisH} from 'react-icons/fa';

interface Props {
  title: string;
  content: string;
}

export const NotificationCard = ({title, content}: Props) => {
  return (
    <Styled.Container>
      <Styled.Post>
        <Styled.IconWrapper>
          <FaStar size={40} />
        </Styled.IconWrapper>
        <Styled.PostWrapper>
          <Styled.Avatar src="https://i.pravatar.cc/100" />
          <Styled.Title>{title}</Styled.Title>
          <Styled.Content>{content}</Styled.Content>
        </Styled.PostWrapper>
      </Styled.Post>
      <Styled.IconSettings>
        <FaEllipsisH size={20} />
      </Styled.IconSettings>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    margin-top: 20px;
    border-bottom: 1px solid lightgrey;
    justify-content: space-between;
  `,
  Post: styled.div`
    display: flex;
    flex-direction: row;
  `,
  IconWrapper: styled.div`
    color: purple;
    margin-left: 40px;
  `,
  PostWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 10px;
  `,
  Avatar: styled.img`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    margin-left: 5px;
  `,
  Title: styled.h5`
    margin-top: 10px;
    color: ${props => props.theme.Notification.title.color};
  `,
  Content: styled.p`
    color: ${props => props.theme.Notification.text.color};
  `,
  IconSettings: styled.div`
    margin-right: 20px;
  `,
};
