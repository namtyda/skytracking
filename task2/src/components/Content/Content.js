import React from 'react'
import './Content.scss'
import { Aside } from '../Aside/Aside';
import { Center } from '../Center/Center';

export function Content() {

  return (
    <main className='content content__App '>
      <Aside />
      <Center />
    </main>
  )
}