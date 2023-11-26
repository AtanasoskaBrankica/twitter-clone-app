import styled from 'styled-components';
import {NavLink as RRDNavLink} from 'react-router-dom';

interface Props {
  text: string;
  icon: JSX.Element;
  to?: string;
}

export const NavLink = ({icon, text, to}: Props) => {
  return (
    <Styled.Container to={to || ''}>
      <Styled.IconWrapper>{icon}</Styled.IconWrapper>
      <Styled.TextWrapper>{text}</Styled.TextWrapper>
    </Styled.Container>
  );
};

const Styled = {
  Container: styled(RRDNavLink)`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
    height: 50px;
    margin-bottom: 17px;
    background: ${props => props.theme.NavBar.RRDNavLink.background}
    }};
  `,
  IconWrapper: styled.div`
    display: flex;
    flex: 1;
    height: 50px;
    padding-top: 10px;
    padding-left: 20px;
    color: ${props => props.theme.NavBar.iconColor.color};
  `,
  TextWrapper: styled.div`
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding-left: 10px;
    flex: 4;
    height: 50px;
    font-size: 1rem;
    font-weight: bold;
    font-family: Roboto;
    color: ${props => props.theme.NavBar.textColor.color};
  `,
};
