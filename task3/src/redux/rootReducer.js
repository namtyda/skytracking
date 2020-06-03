import { combineReducers } from 'redux';
import { photosReducers } from './photosReduces';

export const rootReducer = combineReducers({
  arrayPhotos: photosReducers
});