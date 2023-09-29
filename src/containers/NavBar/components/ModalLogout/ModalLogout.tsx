import {useContext, useState} from 'react';
import {Modal} from 'react-bootstrap';
import styled from 'styled-components';
import {AuthContext} from '../../../../contexts/AuthContext';
import {FaEllipsisH} from 'react-icons/fa';

export const ModalLogout = () => {
  const {user, logout} = useContext(AuthContext);
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Styled.AccountWrapper>
        <Styled.Avatar src="https://i.pravatar.cc/100" />
        <Styled.UserAccount onClick={handleShow}>
          {user?.username}
        </Styled.UserAccount>
        <Styled.IconWrapper>
          <FaEllipsisH size={15} />
        </Styled.IconWrapper>
      </Styled.AccountWrapper>
      <Modal show={showModal} onHide={handleClose}>
        <Styled.ModalWrapper>
          <Modal.Header closeButton>
            <Modal.Title>
              <Styled.AccountWrapper>
                <Styled.Avatar src="https://i.pravatar.cc/100" />
                <Styled.UserAccount onClick={handleShow}>
                  {user?.username}
                </Styled.UserAccount>
              </Styled.AccountWrapper>
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Styled.AnotherAccount>
              Add an existing account
            </Styled.AnotherAccount>
            <Styled.LogoutAccount onClick={logout}>
              Log out {user?.username}
            </Styled.LogoutAccount>
          </Modal.Body>
        </Styled.ModalWrapper>
      </Modal>
    </>
  );
};

const Styled = {
  AccountWrapper: styled.div`
    display: flex;
    flex-direction: row;
    color: ${props => props.theme.Modal.color};
    cursor: pointer;
  `,
  Avatar: styled.img`
    width: 60px;
    height: 60px;
    border-radius: 50%;
    margin-left: 20px;
    margin-top: 10px;
  `,
  UserAccount: styled.span`
    font-size: 18px;
    margin-left: 10px;
    margin-top: 20px;
  `,
  IconWrapper: styled.div`
    margin-left: 25px;
    margin-top: 20px;
  `,
  ModalWrapper: styled.div`
    background: ${props => props.theme.Modal.background};
    color: ${props => props.theme.Modal.color};
    box-shadow: lightgrey 0px 5px 10px;
    margin-right: !important 500px;
  `,
  AnotherAccount: styled.p`
    font-size: 18px;
  `,
  LogoutAccount: styled.p`
    font-size: 18px;
    cursor: pointer;
  `,
};
