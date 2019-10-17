import React from "react";
import "./App.css";
import Lottery from "./components/lottery.component";
function App() {
  return (
    <div className="App">
      <Lottery />
      <Lottery maxBalls={4} title="Mini Daily" maxNum={10} />
    </div>
  );
}

export default App;
