import React from 'react';
import './App.css';
import { Carousel } from './component/Carousel';

function App() {
  return (
    <div className="App">
      <Carousel slides={10} infinite/>
      <Carousel slides={4}/>
      <Carousel slides={1} infinite/>
    </div>
  );
}

export default App;
