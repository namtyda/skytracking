import React from 'react';
import './Footer.scss';

export function Footer() {

  const paragraph = Array.from({ length: 14 }, (el, i) => {
    return <li key={'paragraph' + i} className='footer__paragraph-item'>{'Пункт ' + String(i + 1).padStart(2, '0')}</li>
  });
  return (
    <footer className='footer'>
      <ul className='footer__list-paragraph'>
        {paragraph}
      </ul>
      <ul className='footer__services-list'>
        <li className='footer__services-item'><a href='https://#'>Поисковое продвижение сайтов</a></li>
        <li className='footer__services-item'><a href='https://#'>Тариф &laquo;Старт&raquo;</a></li>
        <li className='footer__services-item'><a href='https://#'>Тариф &laquo;Продвижение Плюс&raquo;</a></li>
        <li className='footer__services-item'><a href='https://#'>Тариф &laquo;Интернет-магазин&raquo;</a></li>
        <li className='footer__services-item'><a href='https://#'>Тариф &laquo;Эксклюзив&raquo;</a></li>
        <li className='footer__services-item'><a href='https://#'>Тариф &laquo;Контекст + SEO&raquo;</a></li>
        <li className='footer__services-item'><a href='https://#'>Тариф &laquo;Регион&raquo;</a></li>
      </ul>
      <div className='footer__wrap-info'>
        <div className='footer__info' />
        <div className='footer__info' />
      </div>
    </footer>
  );
}