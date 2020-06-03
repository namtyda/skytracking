import React from 'react';
import './Aside.scss';

export function Aside() {

  return (
    <section className='aside'>
      <ul className='aside__list'>
      <li className='aside__list-title'>Создание сайтов</li>
      <li className='aside__item'><a href='https://#'>Изготовление сайтов &laquo;под ключ&raquo;</a></li>
      <li className='aside__item'><a href='https://#'>Как мы работаем</a></li>
      <li className='aside__item'><a href='https://#'>Интеграция с 1С</a></li>
      <li className='aside__item'><a href='https://#'>Поддержка сайтов</a></li>
      <li className='aside__item'><a href='https://#'>Создание сайтов на Битрикс</a></li>
      <li className='aside__item'><a href='https://#'>Модули Битрикс</a></li>
      <li className='aside__item'><a href='https://#'>Купить Битрикс</a></li>
      <li className='aside__item'><a href='https://#'>Дизайн сайтов</a></li>
      <li className='aside__item'><a href='https://#'>Редизайн сайтов</a></li>
      <li className='aside__item'><a href='https://#'>Интернет-магазины</a></li>
      <li className='aside__item'><a href='https://#'>Создание логотипов</a></li>
      </ul>
      <div className='aside__bottom' />
    </section>
  );
}
