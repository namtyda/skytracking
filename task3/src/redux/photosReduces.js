import { api } from '../api/api';

const initialState = {
  photos: [],
  isLoading: false,
  firstLoad: ''
}

export function photosReducers(state = initialState, action) {
  switch (action.type) {
    case 'GET_PHOTO':
      return { ...state, photos: [...state.photos, action.payload] };
    case 'LOAD_TOGGLE':
      return { ...state, isLoading: action.payload };
    case 'FIRST_LOAD':
      return { ...state, firstLoad: action.payload }
    case 'DELETE_PHOTO':
      return { ...state, photos: state.photos.filter(({ id }) => id !== action.payload) }
    default:
      return state;
  }
}

const getPhoto = (data) => ({
  type: 'GET_PHOTO',
  payload: data
});

const isLoading = (data) => ({
  type: 'LOAD_TOGGLE',
  payload: data
});

const getFirstLoad = (data) => ({
  type: 'FIRST_LOAD',
  payload: data
});

export const deletePhoto = (data) => ({
  type: "DELETE_PHOTO",
  payload: data
});

export const getAsyncPhoto = (dispatch) => {
  dispatch(isLoading(true));
  try {
    api.getRandomPhoto()
      .then(res => {
        let url = '';
        let name = '';
        let id = '';
        if (res.data !== undefined) {
          url = res.data.urls.small;
          name = res.data.description || res.data.alt_description || 'ничего не пришло с апишки  ¯/_(ツ)_/¯ '
          id = res.data.id + Math.floor(Math.random() * 125)
        } else {
          url = 'https://i.imgur.com/51r7e7b.png';
          name = 'Закончился лимит на апишке (:';
          id = 'fallback' + Math.floor(Math.random() * 125);
        }

        const resultPayload = {
          id,
          url,
          name,
          timeLoad: new Date()
        }

        dispatch(getFirstLoad(resultPayload.url));
        dispatch(getPhoto(resultPayload));
        dispatch(isLoading(false));
      });
  } catch (error) {
    dispatch(isLoading(false));
    console.log(error);
  }
}