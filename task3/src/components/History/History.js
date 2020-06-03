import React, { useState } from 'react';
import { createSelector } from 'reselect'
import { Paginator } from '../Paginator/Paginator';
import { useSelector } from 'react-redux';

import './History.scss';
import { Photo } from '../Photo/Photo';

export const History = () => {
  const [state, setState] = useState({
    currentPage: 1,
    postPerpage: 5,
    isLoading: false,
  });
  const getArrayPhotos = createSelector(
    state => state.arrayPhotos.photos,
    photos => photos
  );
  const arrayPhotos = useSelector(getArrayPhotos);
  const { currentPage, postPerpage } = state;
  const idxLastPhoto = currentPage * postPerpage;
  const idxFirstPhoto = idxLastPhoto - postPerpage;

  const itemPhoto = arrayPhotos.map(({ id, url, timeLoad, name}) => {
    return (
      <Photo src={url} id={id} key={id} data-id={id} timeLoad={timeLoad} name={name} />
    )
  });


  const paginate = page => setState(state => ({ ...state, currentPage: page }));
  return (
    <div className='histort'>
      <div className='history__wrapper'>
        {itemPhoto.slice(idxFirstPhoto, idxLastPhoto)}
      </div>
      <Paginator totalPost={arrayPhotos.length} postPerPage={postPerpage} paginate={paginate} />
    </div>
  );
};