import React, {useContext, useState} from 'react';
import styled from 'styled-components';
import {NavLink} from '../../components/NavLink/NavLink';
import Button from '../../components/Button/Button';
import {
  FaTwitter,
  FaHome,
  FaHashtag,
  FaRegBell,
  FaEnvelope,
  FaBookmark,
  FaListUl,
  FaUserAlt,
  FaChevronCircleDown,
  FaRegCommentDots,
  FaRegNewspaper,
  FaRocket,
  FaFoursquare,
  FaRegChartBar,
  FaRegSun,
  FaRegQuestionCircle,
  FaAd,
  FaCreativeCommonsBy,
  FaPaintBrush,
} from 'react-icons/fa';
import {ModalLogout} from './components/ModalLogout/ModalLogout';
import {Modal} from 'react-bootstrap';
import {ModalMore} from './components/ModalMore/ModalMore';
import {useDispatch} from 'react-redux';
import {toggleTheme} from '../../state/theme/theme.actions';

export const NavBar = () => {
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const dispatch = useDispatch();

  return (
    <Styled.Container className="col-3">
      <NavLink to="/" text="" icon={<FaTwitter size={40} />} />
      <NavLink to="/" text="Home" icon={<FaHome size={30} />} />
      <NavLink to="/explore" text="Explore" icon={<FaHashtag size={30} />} />
      <NavLink
        to="/notifications"
        text="Notifications"
        icon={<FaRegBell size={30} />}
      />
      <NavLink to="/messages" text="Messages" icon={<FaEnvelope size={30} />} />
      <NavLink
        to="/bookmarks"
        text="Bookmarks"
        icon={<FaBookmark size={30} />}
      />
      <NavLink to="/lists" text="Lists" icon={<FaListUl size={30} />} />
      <NavLink to="/profile" text="Profile" icon={<FaUserAlt size={30} />} />
      <NavLink
        text="More"
        icon={<FaChevronCircleDown size={30} onClick={handleShow} />}
      />
      <Modal show={showModal} onHide={handleClose}>
        <Styled.ModalWrapper>
          <Modal.Header closeButton>
            <Modal.Title>
              <ModalMore text="Topics" icon={<FaRegCommentDots />} />
              <ModalMore text="Moments" icon={<FaFoursquare />} />
              <ModalMore text="Newsletters" icon={<FaRegNewspaper />} />
              <ModalMore text="Twitter for Professionals" icon={<FaRocket />} />
              <ModalMore text="Twitter Ads" icon={<FaAd />} />
              <ModalMore text="Analytics" icon={<FaRegChartBar />} />
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <ModalMore text="Settings and privacy" icon={<FaRegSun />} />
            <ModalMore text="Help Center" icon={<FaRegQuestionCircle />} />
            <ModalMore
              text="Switch Dark/Light Mood"
              icon={
                <FaPaintBrush
                  onClick={() => {
                    dispatch(toggleTheme());
                  }}
                />
              }
            />
            <ModalMore text="Twitter Ads" icon={<FaAd />} />
            <ModalMore
              text="Keyboard shortcuts"
              icon={<FaCreativeCommonsBy />}
            />
          </Modal.Body>
        </Styled.ModalWrapper>
      </Modal>
      <Button
        name="Tweet"
        backgroundColor="rgb(29,155,240)"
        textColor="white"
        width="250px"
      ></Button>
      <ModalLogout />
    </Styled.Container>
  );
};

const Styled = {
  Container: styled.nav`
    background: ${props => props.theme.NavBar.nav.background};
    border-right: 1px solid lightgrey;
    padding-left: 150px;
  `,
  Button: styled.button`
    margin-top: 20px;
    margin-left: 60px;
    width: 90px;
    height: 90px;
    border-radius: 50%;
    font-family: Roboto;
    font-weight: bold;
    color: ${props => props.theme.button.color};
    background: ${props => props.theme.button.background};
    margin-bottom: 30px;
  `,
  ModalWrapper: styled.div`
    background: ${props => props.theme.Modal.background};
    color: ${props => props.theme.Modal.color};
    box-shadow: lightgrey 0px 5px 10px;
  `,
};
