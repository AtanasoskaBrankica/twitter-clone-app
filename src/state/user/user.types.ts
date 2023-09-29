export interface User {
  username: string;
  password: string;
}

export type UserState = {
  userIsLoggedIn: boolean;
  loading: boolean;
  error: string;
  user?: User;
};
