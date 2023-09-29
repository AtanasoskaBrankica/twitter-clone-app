import {useState} from 'react';
import styled from 'styled-components';

interface Props {
  options: String[];
  name: string;
}

export const FormBirthday = ({options, name}: Props) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);
  const toggling = () => setIsOpen(!isOpen);

  const onOptionClicked = (value: any) => () => {
    setSelectedOption(value);
    setIsOpen(false);
  };

  return (
    <Styled.DropDownContainer>
      <Styled.DropDownHeader onClick={toggling}>
        {selectedOption || name}
      </Styled.DropDownHeader>
      {isOpen && (
        <Styled.DropDownListContainer>
          <Styled.DropDownList>
            {options.map((option, index) => (
              <Styled.ListItem onClick={onOptionClicked(option)} key={index}>
                {option}
              </Styled.ListItem>
            ))}
          </Styled.DropDownList>
        </Styled.DropDownListContainer>
      )}
    </Styled.DropDownContainer>
  );
};

const Styled = {
  DropDownContainer: styled.div`
    width: 150px;
    margin-left: 40px;
    margin-right: 40px;
  `,
  DropDownHeader: styled.div`
    padding: 8px;
    font-weight: bold;
    font-size: 20px;
    color: rgb(29, 155, 240);
    background: black;
    border: 1px solid grey;
  `,
  DropDownListContainer: styled.div``,
  DropDownList: styled.ul`
    background: black;
    border: 2px solid lightgrey;
    color: rgb(29, 155, 240);
    font-size: 20px;
    font-weight: 500;
  `,
  ListItem: styled.li`
    list-style: none;
    margin-top: 10px;
  `,
};
