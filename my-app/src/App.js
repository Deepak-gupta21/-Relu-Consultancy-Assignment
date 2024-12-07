import React from 'react';
import Header from './components/Header';
import Navbar from './components/Navbar';
import MainContent from './components/MainContent';
import ScrollBar from './components/Scrollbar';

const App = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
        <Header />
      <div style={{ display: 'flex'}}>
        <Navbar />
        <MainContent />
        <ScrollBar />
      </div>
    </div>
  );
};

export default App;
