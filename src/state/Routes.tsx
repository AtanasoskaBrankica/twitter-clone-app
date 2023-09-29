import React from 'react';
import {Route, Routes as RRDRoutes} from 'react-router-dom';
import {Explore} from '../containers/Home/components/Explore/Explore';
import {Main} from '../containers/Home/components/Main/Main';
import {All} from '../containers/Home/components/Notifications/components/All/All';
import {Mentions} from '../containers/Home/components/Notifications/components/Mentions/Mentions';
import {Notifications} from '../containers/Home/components/Notifications/Notifications';
import {Likes} from '../containers/Home/components/Profile/components/Likes/Likes';
import {Media} from '../containers/Home/components/Profile/components/Media/Media';
import {Tweets} from '../containers/Home/components/Profile/components/Tweets/Tweets';
import {Profile} from '../containers/Home/components/Profile/Profile';
import {Messages} from '../containers/Home/Messages/Messages';
import {LoginPage} from '../containers/LoginPage/LoginPage';
import {PostPage} from '../containers/PostPage/PostPage';
import {RegisterPage} from '../containers/RegisterPage/RegisterPage';
import {TwitterPage} from '../containers/TwitterPage/TwitterPage';
import {ProtectedRoute} from './ProtectedRoute';

export const Routes = () => {
  return (
    <RRDRoutes>
      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Main />
          </ProtectedRoute>
        }
      ></Route>
      <Route
        path="posts"
        element={<div style={{color: 'white'}}>posts</div>}
      ></Route>
      <Route path="posts/:id" element={<PostPage />}></Route>
      <Route path="explore" element={<Explore />}></Route>
      <Route path="notifications" element={<Notifications />}>
        <Route path="all" element={<All />} />
        <Route path="mentions" element={<Mentions />} />
      </Route>
      <Route path="messages" element={<Messages />}></Route>
      <Route
        path="bookmarks"
        element={<div style={{color: 'white'}}>bookmarks</div>}
      ></Route>
      <Route
        path="lists"
        element={<div style={{color: 'white'}}>lists</div>}
      ></Route>
      <Route path="profile" element={<Profile />}>
        <Route path="tweets" element={<Tweets />} />
        <Route path="tweetsAndreplies" element={<Tweets />} />
        <Route path="media" element={<Media />} />
        <Route path="likes" element={<Likes />} />
      </Route>
      <Route path="login" element={<LoginPage />}></Route>
      <Route path="register" element={<RegisterPage />}></Route>
      <Route path="twitter" element={<TwitterPage />}></Route>
      <Route
        path="*"
        element={<div style={{color: 'white'}}>this page doesn't exist</div>}
      />
    </RRDRoutes>
  );
};
