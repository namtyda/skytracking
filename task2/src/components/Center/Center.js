import React from 'react';
import { OrderList } from '../OrderList/OrderList';
import { CardList } from '../CardList/CardList';
import { About } from '../About/About';

export function Center() {

  return (
    <section>
      <OrderList />
      <CardList />
      <About />
    </section>
  );
}