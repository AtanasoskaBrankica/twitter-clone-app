import {useEffect, useState} from 'react';
import styled from 'styled-components';
import {NewsSingleCard} from '../NewsSingleCard/NewsSingleCard';

interface NewsProps {
  id: number;
  title: string;
  url: string;
  thumbnailUrl: string;
}

export const News = () => {
  const [news, setNews] = useState<NewsProps[]>([]);
  const [error, setError] = useState<string>('');
  useEffect(() => {
    const fetchNewsFromApi = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/photos'
        );
        const data = await response.json();
        setNews(data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchNewsFromApi();
  }, []);

  if (error) {
    return <Styled.ErrorMessage>{error}</Styled.ErrorMessage>;
  } else {
    return (
      <div>
        {news.slice(0, 5).map(post => {
          return <NewsSingleCard key={post.id} {...post} />;
        })}
      </div>
    );
  }
};

const Styled = {
  ErrorMessage: styled.span`
    font-size: 20px;
    margin-left: 300px;
    color: red;
  `,
};
