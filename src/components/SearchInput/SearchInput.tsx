import styled from 'styled-components';
import {FaSearch} from 'react-icons/fa';

interface Props {
  placeholderText: string;
}
export const SearchInput = ({placeholderText}: Props) => {
  return (
    <Styled.Container>
      <Styled.SearchWrapper>
        <Styled.SearchIcon>
          <FaSearch size={23} />
          <Styled.SearchInput
            type="text"
            placeholder={placeholderText}
          ></Styled.SearchInput>
        </Styled.SearchIcon>
      </Styled.SearchWrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: row;
    height: 60px;
    width: 100%;
  `,
  SearchWrapper: styled.div`
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    width: 650px;
    height: 50px;
    margin-left: 15px;
    margin-top: 3px;
    border-radius: 30px;
    background: ${props => props.theme.Aside.searchInput.background};
    border: 1px solid lightgrey;
  `,
  SearchIcon: styled.div`
    margin-left: 20px;
    margin-top: 10px;
  `,
  SearchInput: styled.input`
    border: none;
    margin-left: 20px;
    background: transparent;
    font-family: Quicksand;
    font-weight: bold;
  `,
};
