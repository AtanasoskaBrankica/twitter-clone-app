import {stringify} from 'querystring';
import React, {useCallback, useEffect} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {useNavigate} from 'react-router-dom';
import {LocalStorageConstants} from '../constants/constants';
import {
  getUserApi,
  loginApi,
  logoutApi,
  registerUserApi,
} from '../mockApi/login';
import {
  getUser,
  getUserUnsuccess,
  loading as loadingAction,
  loginInProgress,
  loginSuccess,
  loginUnsuccess,
  logoutSuccess,
  logoutUnsuccess,
  registerSuccess,
  registerUnsuccess,
} from '../state/user/user.actions';
import * as selectors from '../state/user/user.selectors';
import {
  readFromStorage,
  removeFromStorage,
  writeInStorage,
} from '../utils/localStorage';

interface User {
  username: string;
  password: string;
}

interface ContextValues {
  login: ({username, password}: {username: string; password: string}) => void;
  logout: () => void;
  register: ({
    firstName,
    lastName,
    username,
    password,
    repeatPassword,
  }: {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    repeatPassword: string;
  }) => void;
  loading: boolean;
  user?: User;
  error?: string;
  userIsLoggedIn: boolean;
}

export const AuthContext = React.createContext<ContextValues>({
  login: () => {},
  logout: () => {},
  register: () => {},
  loading: false,
  userIsLoggedIn: false,
});

export const AuthContextConstructor = ({children}: {children: JSX.Element}) => {
  const dispatchRedux = useDispatch();
  const user = useSelector(selectors.userSelector);
  const error = useSelector(selectors.errorSelector);
  const loading = useSelector(selectors.loadingSelector);
  const userIsLoggedIn = useSelector(selectors.userIsLoggedInSelector);

  useEffect(() => {
    dispatchRedux(loadingAction(true));
    const timeout = setTimeout(async () => {
      try {
        const accessToken = readFromStorage(LocalStorageConstants.AccessToken);
        const user = await getUserApi({accessToken});
        const {username, password} = user;
        dispatchRedux(getUser({user: {username, password}}));
      } catch (error: any) {
        dispatchRedux(getUserUnsuccess({error: error?.message}));
      }
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  const login = async ({
    username,
    password,
  }: {
    username: string;
    password: string;
  }) => {
    dispatchRedux(loginInProgress());
    try {
      const result = await loginApi({username, password});
      writeInStorage(LocalStorageConstants.AccessToken, result.accessToken);
      writeInStorage(LocalStorageConstants.RefreshToken, result.refreshToken);
      writeInStorage(LocalStorageConstants.Username, result.username);
      writeInStorage(LocalStorageConstants.Password, result.password);
      dispatchRedux(loginSuccess({user: {username, password}}));
    } catch (error: any) {
      dispatchRedux(loginUnsuccess({error: error?.message}));
    }
  };

  const register = async ({
    firstName,
    lastName,
    username,
    password,
    repeatPassword,
  }: {
    firstName: string;
    lastName: string;
    username: string;
    password: string;
    repeatPassword: string;
  }) => {
    try {
      const result = await registerUserApi({
        firstName,
        lastName,
        username,
        password,
        repeatPassword,
      });
      writeInStorage(LocalStorageConstants.AccessToken, result.accessToken);
      writeInStorage(LocalStorageConstants.RefreshToken, result.refreshToken);
      writeInStorage(LocalStorageConstants.Username, result.user.username);
      writeInStorage(LocalStorageConstants.Password, result.user.password);
      dispatchRedux(
        registerSuccess({
          user: result.user,
        })
      );
    } catch (error: any) {
      dispatchRedux(registerUnsuccess({error: error?.message}));
    }
  };

  const logout = async () => {
    dispatchRedux(loadingAction(true));
    try {
      const accessToken = readFromStorage(LocalStorageConstants.AccessToken);
      await logoutApi({accessToken});
      removeFromStorage(LocalStorageConstants.AccessToken);
      removeFromStorage(LocalStorageConstants.RefreshToken);
      removeFromStorage(LocalStorageConstants.Username);
      removeFromStorage(LocalStorageConstants.Password);
      dispatchRedux(logoutSuccess());
    } catch (error: any) {
      dispatchRedux(logoutUnsuccess({error: error?.message}));
    } finally {
      dispatchRedux(loadingAction(false));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        login,
        logout,
        register,
        error,
        loading,
        userIsLoggedIn,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
