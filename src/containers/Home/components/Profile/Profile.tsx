import styled from 'styled-components';
import {PageWrapper} from '../../../../components/PageWrapper/PageWrapper';
import {FaArrowLeft, FaCalendarAlt} from 'react-icons/fa';
import {Link, useLocation, useNavigate} from 'react-router-dom';
import Button from '../../../../components/Button/Button';
import {useState} from 'react';
import {Modal} from 'react-bootstrap';
import {useForm} from 'react-hook-form';
import {changePasswordApi} from '../../../../mockApi/login';
import {Tweets} from './components/Tweets/Tweets';
import {Media} from './components/Media/Media';
import {Likes} from './components/Likes/Likes';

interface FormProps {
  newPassword: string;
  confirmPassword: string;
  currentPassword: string;
}

export const Profile = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [showModal, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const {
    register,
    handleSubmit,
    watch,
    reset,
    formState: {errors},
  } = useForm<FormProps>({
    defaultValues: {
      currentPassword: '',
      newPassword: '',
      confirmPassword: '',
    },
  });
  const onSubmit = (data: FormProps) => {
    changePasswordApi(data);
    handleClose();
    reset();
  };

  let path;
  const currentPathname = location.pathname;
  if (currentPathname.includes('tweet')) {
    path = <Tweets />;
  } else if (currentPathname.includes('media')) {
    path = <Media />;
  } else {
    path = <Likes />;
  }

  return (
    <PageWrapper>
      <Styled.Container className="col-6">
        <Styled.HeaderWrapper>
          <Styled.TopHeader>
            <Styled.IconWrapper>
              <FaArrowLeft size={20} onClick={() => navigate('/')} />
            </Styled.IconWrapper>
            <Styled.UsernameWrapper>
              <Styled.UsernameText>Brankica Atanasoska</Styled.UsernameText>
              <Styled.TweetsNumber>43 Tweets</Styled.TweetsNumber>
            </Styled.UsernameWrapper>
          </Styled.TopHeader>
          <Styled.CoverImage src="https://newevolutiondesigns.com/images/freebies/galaxy-facebook-cover-1.jpg"></Styled.CoverImage>
          <Styled.Avatar src="https://i.pravatar.cc/100" />
          <Button
            backgroundColor="white"
            width="150px"
            margin="-180px 0px 0px 700px"
            name="Edit Profile"
            textColor="black"
            onClick={handleShow}
          ></Button>
          <Modal show={showModal} onHide={handleClose}>
            <Styled.ModalWrapper>
              <Modal.Header closeButton>
                <Modal.Title>Change your password</Modal.Title>
              </Modal.Header>
              <Styled.Form onSubmit={handleSubmit(onSubmit)}>
                <Modal.Body>
                  <Styled.Input
                    type="password"
                    {...register('currentPassword', {
                      required: 'Current Password is required',
                    })}
                    placeholder="Current Password"
                  />
                  {errors.currentPassword?.message ? (
                    <Styled.Error>
                      {errors.currentPassword?.message}
                    </Styled.Error>
                  ) : null}
                  <Styled.Input
                    type="password"
                    {...register('newPassword', {
                      required: 'New Password is required',
                    })}
                    placeholder="New Password"
                  />
                  {errors.newPassword?.message ? (
                    <Styled.Error>{errors.newPassword?.message}</Styled.Error>
                  ) : null}
                  <Styled.Input
                    type="password"
                    {...register('confirmPassword', {
                      required: 'Confirm Password is required',
                    })}
                    placeholder="Confirm Password"
                  />
                  {errors.confirmPassword?.message ? (
                    <Styled.Error>
                      {errors.confirmPassword?.message}
                    </Styled.Error>
                  ) : null}
                </Modal.Body>
                <Button
                  backgroundColor="white"
                  type="submit"
                  width="150px"
                  name="Save"
                  textColor="black"
                  margin="-20px 0px 10px 150px"
                />
              </Styled.Form>
            </Styled.ModalWrapper>
          </Modal>
          <Styled.AccountWrapper>
            <Styled.Username>@Atanasoska98</Styled.Username>
            <Styled.JoinedDateWrapper>
              <Styled.DateIcon>
                <FaCalendarAlt size={15} />
              </Styled.DateIcon>
              <Styled.JoinedDate>Joined January 2022</Styled.JoinedDate>
            </Styled.JoinedDateWrapper>
          </Styled.AccountWrapper>
          <Styled.FollowWrapper>
            <Styled.Following>150 Following</Styled.Following>
            <Styled.Followers>320 Followers</Styled.Followers>
          </Styled.FollowWrapper>
        </Styled.HeaderWrapper>
        <Styled.LinkWrapper>
          <Link style={{color: 'grey', fontWeight: 'bold'}} to="tweets">
            Tweets
          </Link>
          <Link
            style={{color: 'grey', fontWeight: 'bold'}}
            to="tweetsAndreplies"
          >
            Tweets and replies
          </Link>
          <Link style={{color: 'grey', fontWeight: 'bold'}} to="media">
            Media
          </Link>
          <Link style={{color: 'grey', fontWeight: 'bold'}} to="likes">
            Likes
          </Link>
        </Styled.LinkWrapper>
        {path}
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
    display: flex;
    flex-direction: column;
    border-bottom: 1px solid grey;
    height: 700px;
  `,
  TopHeader: styled.div`
    display: flex;
    flex-direction: row;
  `,
  IconWrapper: styled.div`
    margin-left: 10px;
    margin-top: 20px;
    color: ${props => props.theme.Profile.text.color};
    cursor: pointer;
  `,
  UsernameWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-left: 50px;
    margin-top: 5px;
  `,
  UsernameText: styled.span`
    font-size: 25px;
    color: ${props => props.theme.Profile.text.color};
    font-weight: bold;
  `,
  TweetsNumber: styled.span`
    color: ${props => props.theme.Profile.otherText.color};
    font-size: 1rem;
  `,
  CoverImage: styled.img`
    width: 100%;
    height: 300px;
    margin-top: 5px;
  `,
  Avatar: styled.img`
    width: 150px;
    height: 150px;
    border-radius: 50%;
    margin-left: 5px;
    position: relative;
    bottom: 100px;
    left: 10px;
    border: 5px solid black;
  `,
  AccountWrapper: styled.div`
    display: flex;
    flex-direction: column;
    margin-top: 40px;
    margin-left: 30px;
  `,
  Username: styled.span`
    font-size: 20px;
    color: ${props => props.theme.Profile.text.color};
    font-weight: bold;
  `,
  JoinedDateWrapper: styled.div`
    display: flex;
    flex-direction: row;
    color: ${props => props.theme.Profile.otherText.color};
  `,
  DateIcon: styled.div`
    margin-right: 10px;
  `,
  JoinedDate: styled.span`
    font-size: 1rem;
  `,
  FollowWrapper: styled.div`
    display: flex;
    flex-direction: row;
    margin-left: 30px;
    margin-top: 10px;
    font-size: 1rem;
    color: ${props => props.theme.Profile.otherText.color};
  `,
  Following: styled.span`
    margin-right: 20px;
  `,
  Followers: styled.span``,
  LinkWrapper: styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    margin-left: 60px;
    margin-right: 60px;
    font-size: 18px;
    margin-top: -70px;
  `,
  ModalWrapper: styled.div`
    background: ${props => props.theme.Modal.background};
    color: ${props => props.theme.Modal.color};
    box-shadow: lightgrey 0px 5px 10px;
  `,
  Form: styled.form`
    display: flex;
    flex-direction: column;
    height: 100%;
    width: 100%;
  `,
  Input: styled.input`
    border: 1px solid grey;
    margin-bottom: 20px;
    background: ${props => props.theme.Modal.background};
    width: 100%;
    height: 50px;
    color: ${props => props.theme.Profile.otherText.color};
    padding-bottom: 10px;
    &::placeholder {
      color: ${props => props.theme.Profile.text.color};
      font-size: 18px;
      padding-left: 8px;
      font-family: Quicksand;
    }
  `,
  Error: styled.span`
    color: red;
    font-size: 14px;
  `,
};
