import React from 'react'
import './Header.scss'

export function Header() {

  return (
    <header className='header header__App'>
      <div className='header__items'></div>
      <div className='header__items'></div>
      <div className='header__items header__items_text'>
        <p className='header__items-text'>
          +7 (499) 346-21-31
          <a className='header__items-link' href='mailto:manager@pixelplus.ru'>manager@pixelplus.ru</a>
          <a className='header__items-link' href='http://www.pixelplus.ru' target='_blank' rel="noopener noreferrer" >www.pixelplus.ru</a>
        </p>
      </div>
    </header>
  )
}