import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { createSelector } from 'reselect'
import { getAsyncPhoto } from '../../redux/photosReduces';
import { Loader } from '../Loader/Loader';
import './Home.scss';
import { useHistory } from 'react-router-dom';

export const Home = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const getisLoading = createSelector(
    state => state.arrayPhotos.isLoading,
    isLoading => isLoading
  );

  const getPhotos = createSelector(
    state => state.arrayPhotos.firstLoad,
    photos => photos
  );
  const firstLoadPhoto = useSelector(getPhotos);
  const isLoading = useSelector(getisLoading);

  useEffect(() => {
    dispatch(getAsyncPhoto)
  }, [dispatch]);


  return (
    <div className='home'>
      <div className='home__button-wrapper'>
        <button className='home__button home__button_load' onClick={() => dispatch(getAsyncPhoto)}>Загрузить</button>
        <button className='home__button home__button_history' onClick={() => history.push('/history')}>История</button>
      </div>
      {isLoading ? <Loader /> : <img className='home__img' src={firstLoadPhoto} alt='random img' />}
    </div>
  );
};