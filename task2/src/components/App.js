import React from 'react';
import { Header } from './Header/Header';
import { Content } from './Content/Content';
import { Footer } from '../components/Footer/Footer';
import './App.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
