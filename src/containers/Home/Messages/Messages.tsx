import styled from 'styled-components';
import {PageWrapper} from '../../../components/PageWrapper/PageWrapper';
import {FaCog, FaEnvelopeOpenText} from 'react-icons/fa';
import {MessageCard} from './components/MessageCard/MessageCard';
import {SearchInput} from '../../../components/SearchInput/SearchInput';

export const Messages = () => {
  return (
    <PageWrapper>
      <Styled.Container className="col-6">
        <Styled.HeaderWrapper>
          <Styled.TopWrapper>
            <Styled.Title>Messages</Styled.Title>
            <Styled.IconWrapperOne>
              <FaCog size={25} />
            </Styled.IconWrapperOne>
            <Styled.IconWrapperTwo>
              <FaEnvelopeOpenText size={25} />
            </Styled.IconWrapperTwo>
          </Styled.TopWrapper>
          <Styled.SearchWrapper>
            <SearchInput placeholderText="Search Direct Messages" />
          </Styled.SearchWrapper>
        </Styled.HeaderWrapper>
        <MessageCard />
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
  HeaderWrapper: styled.div`
    border-bottom: 1px solid lightgrey;
    padding-bottom: 10px;
  `,
  TopWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    color: ${props => props.theme.Messages.title.color};
    margin-top: 10px;
    margin-bottom: 20px;
  `,
  Title: styled.h3`
    font-weight: bold;
    margin-left: 10px;
  `,
  IconWrapperOne: styled.div`
    margin-left: 600px;
  `,
  IconWrapperTwo: styled.div`
    margin-right: 10px;
  `,
  SearchWrapper: styled.div`
    margin-left: 100px;
  `,
};
