import {useEffect, useState} from 'react';
import styled from 'styled-components';

interface Image {
  url?: string;
  albumId?: number;
  id?: number;
  thumbnailUrl?: string;
}

export const CoverImage = () => {
  const [image, setImage] = useState<Image>({});
  const [error, setError] = useState<string>('');
  useEffect(() => {
    const fetchImageFromApi = async () => {
      try {
        const response = await fetch(
          'https://jsonplaceholder.typicode.com/photos/1'
        );
        const data = await response.json();
        setImage(data);
      } catch (error: any) {
        setError(error.message);
      }
    };
    fetchImageFromApi();
  }, []);
  if (error) {
    return <Styled.ErrorMessage>{error}</Styled.ErrorMessage>;
  } else {
    return <Styled.Image src={image.url}></Styled.Image>;
  }
};

const Styled = {
  Image: styled.img`
    height: 500px;
  `,
  ErrorMessage: styled.span`
    font-size: 20px;
    margin-left: 300px;
    color: red;
  `,
};
