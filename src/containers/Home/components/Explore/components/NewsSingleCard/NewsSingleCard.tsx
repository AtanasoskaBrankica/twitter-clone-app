import styled from 'styled-components';

interface NewsProps {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const NewsSingleCard = ({id, title, url, thumbnailUrl}: NewsProps) => {
  return (
    <Styled.Container>
      <Styled.Content>
        <Styled.AdditionalInfo>Women's Cricket World Cup</Styled.AdditionalInfo>
        <Styled.Title>{title}</Styled.Title>
      </Styled.Content>
      <Styled.Image src={thumbnailUrl} />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    width: 100%;
    height: 100px;
    margin-bottom: 10px;
    justify-content: space-between;
  `,
  Content: styled.div`
    display: flex;
    flex-direction: column;
  `,
  AdditionalInfo: styled.span`
    color: grey;
  `,
  Title: styled.h4`
    color: ${props => props.theme.News.color};
  `,
  Image: styled.img`
    width: 100px;
    height: 90px;
    margin-right: 20px;
    border-radius: 25%;
    margin-top: 3px;
  `,
};
