import {LocalStorageConstants} from '../constants/constants';
import {
  readFromStorage,
  removeFromStorage,
  writeInStorage,
} from '../utils/localStorage';
interface User {
  username: string;
  password: string;
}

export const loginApi = ({
  username,
  password,
}: {
  username: string;
  password: string;
}): Promise<{
  accessToken: string;
  refreshToken: string;
  username: string;
  password: string;
}> => {
  return new Promise((resolve, reject) => {
    if (password.length < 6) {
      reject('Please make your password at least 6 characters');
    }
    if (username === 'primer@primer.com' && password === 'password123') {
      resolve({
        accessToken: LocalStorageConstants.AccessToken,
        refreshToken: LocalStorageConstants.RefreshToken,
        username: username,
        password: password,
      });
    } else {
      reject('Check your username and password');
    }
  });
};

export const logoutApi = ({
  accessToken,
}: {
  accessToken: string | null;
}): Promise<boolean> => {
  return new Promise((resolve, reject) => {
    if (accessToken) {
      resolve(true);
    } else {
      reject('You are not logged out');
    }
  });
};

export const getUserApi = ({
  accessToken,
}: {
  accessToken: string | null;
}): Promise<{username: string; password: string}> => {
  return new Promise((resolve, reject) => {
    if (accessToken) {
      const username = readFromStorage(LocalStorageConstants.Username);
      const password = readFromStorage(LocalStorageConstants.Password);
      if (username != null && password != null) {
        resolve({username: username, password: password});
      }
    } else {
      reject('You must login');
    }
  });
};

export const registerUserApi = ({
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
}): Promise<{user: User; accessToken: string; refreshToken: string}> => {
  return new Promise((resolve, reject) => {
    if (password === repeatPassword) {
      resolve({
        user: {username, password},
        accessToken: LocalStorageConstants.AccessToken,
        refreshToken: LocalStorageConstants.RefreshToken,
      });
    } else {
      reject("Password and Repeat Password don't match");
    }
  });
};

export const changePasswordApi = (data: any) => {
  const currentPassword = readFromStorage(LocalStorageConstants.Password);
  if (
    data.currentPassword === currentPassword &&
    data.newPassword === data.confirmPassword
  ) {
    removeFromStorage(LocalStorageConstants.Password);
    writeInStorage(LocalStorageConstants.Password, data.newPassword);
    alert('Your password has been successfully changed');
  } else {
    alert('Passwords do not match');
  }
};
