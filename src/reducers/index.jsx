import { combineReducers } from 'redux';
import activeBookReducer from './activeBookReducer';
import booksReducer from './booksReducer';

export default combineReducers({
  books: booksReducer,
  activeBook: activeBookReducer,
});
