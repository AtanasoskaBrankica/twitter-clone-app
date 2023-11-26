import styled from 'styled-components';
import {FaCog} from 'react-icons/fa';
import {Link, useLocation} from 'react-router-dom';
import {All} from './components/All/All';
import {Mentions} from './components/Mentions/Mentions';
import {PageWrapper} from '../../../../components/PageWrapper/PageWrapper';

export const Notifications = () => {
  const location = useLocation();
  return (
    <PageWrapper>
      <Styled.Container className="col-6">
        <Styled.HeadingWrapper>
          <Styled.HeadingTop>
            <Styled.Title>Notifications</Styled.Title>
            <FaCog size={25} />
          </Styled.HeadingTop>
          <Styled.LinkWrapper>
            <Link style={{color: 'grey', fontWeight: 'bold'}} to="all">
              All
            </Link>
            <Link style={{color: 'grey', fontWeight: 'bold'}} to="mentions">
              Mentions
            </Link>
          </Styled.LinkWrapper>
        </Styled.HeadingWrapper>
        {location.pathname.includes('all') ? <All /> : <Mentions />}
      </Styled.Container>
    </PageWrapper>
  );
};

const Styled = {
  Container: styled.div`
    display: flex;
    flex-direction: column;
    background: ${props => props.theme.Main.background};
  `,
  HeadingWrapper: styled.div`
    border-bottom: 1px solid lightgrey;
  `,
  HeadingTop: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${props => props.theme.Notification.title.color};
    margin-top: 15px;
  `,
  Title: styled.h4`
    font-weight: bold;
  `,
  LinkWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 200px;
    margin-right: 200px;
    font-size: 18px;
    margin-top: 40px;
    margin-bottom: 10px;
  `,
};
