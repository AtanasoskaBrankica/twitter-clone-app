import {useContext} from 'react';
import {Navigate} from 'react-router-dom';
import {AuthContext} from '../contexts/AuthContext';

interface Props {
  children: JSX.Element;
}

export const ProtectedRoute = ({children}: Props) => {
  const {userIsLoggedIn} = useContext(AuthContext);
  return userIsLoggedIn ? children : <Navigate to="/twitter" />;
};
