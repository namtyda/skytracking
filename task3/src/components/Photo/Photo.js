import React from 'react';
import './Photo.scss';
import { useDispatch } from 'react-redux';
import { deletePhoto } from '../../redux/photosReduces';

export const Photo = React.memo(({ id, src, name, timeLoad }) => {
  const dispatch = useDispatch()
  return (
    <div className='wrapper'>
      <img className='photo' src={src} alt='random img' />
      <i className='photo__del' data-id={id} onClick={(e) => dispatch(deletePhoto(e.currentTarget.dataset.id))}></i>
      <p>{name}</p>
      {timeLoad.toLocaleString('ru')}
    </div>
  )
});