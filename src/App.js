import React from 'react';
import './App.scss';
import { Navbar } from './components';
import {
  Achievements,
  Footer,
  HomeHero,
  LatestNews,
  Location,
  UnlockDepartments,
} from './containers';

const App = () => {
  return (
    <div className='app'>
      <Navbar />
      <HomeHero />
      <UnlockDepartments />
      <Achievements />
      <LatestNews />
      <Location />
      <Footer />
    </div>
  );
};

export default App;
