import React from 'react';
import './App.css';
import Nav from './components/Nav';
import Header from './components/Header';
import Content from './components/Content';


function App() {
  return (
    <div className="App">
      <Nav />
      <Header />
      <Content />
    </div>
  );
}

export default App;
