import React from 'react';
import './OrderList.scss';

export function OrderList() {

  return (
    <div className='order-list order-list__center'>
      <h1 className='order-list__title'>
        PSD файл с макетом. Макет разбит по слоям и сгрупированн по папкам:
      </h1>
      <ul className='order-list__orders'>
        <li className='order-list__items' ><span className='order-list__items order-list__items_accent'>number</span> - нумерация блоков (номера блоков верстать не нужно)</li>
        <li className='order-list__items' ><span className='order-list__items order-list__items_accent'>text</span> - текстовые блоки (шрифт Arial, размер 14 пикселей, межстрочное растояние 22 пикселя)</li>
        <li className='order-list__items' ><span className='order-list__items order-list__items_accent'>head</span> - шапка сайта</li>
        <li className='order-list__items' ><span className='order-list__items order-list__items_accent'>content</span> - контентная область, которая в свою очередь делится на <span className='order-list__items order-list__items_accent' >left</span>  и <span className='order-list__items order-list__items_accent'>center</span> </li>
      </ul>
      <p className='order-list__post'>Текстовое описание задания и требования.</p>
    </div>
  );
}