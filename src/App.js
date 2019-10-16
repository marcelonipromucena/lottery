import React from 'react';
import './App.css';

import Ball from './components/ball.component';

function App() {
  return (
    <div className="App">
      <Ball num={17} />
      <Ball num={3} />
      <Ball num={32} />
      <Ball num={9} />
    </div>
  );
}

export default App;
