import React from 'react';
import './Paginator.scss';

export const Paginator = React.memo(({ totalPost, postPerPage, paginate }) => {
  const pages = Array.from({ length: Math.ceil(totalPost / postPerPage) }, (_, i) => <li onClick={() => paginate(i + 1)} key={i}>{i + 1}</li>)
  return (
    <ul className='paginator'>
      {pages}
    </ul>
  )
})