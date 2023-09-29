import {createStore, combineReducers} from 'redux';
import {postsReducer} from './posts/posts.reducer';
import {themeReducer} from './theme/theme.reducer';
import {userReducer} from './user/user.reducer';

const rootReducer = combineReducers({
  user: userReducer,
  theme: themeReducer,
  posts: postsReducer,
});

const store = createStore(
  //@ts-ignore
  rootReducer,
  undefined,
  //@ts-ignore
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export {store};
