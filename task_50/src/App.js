import React, { useState } from "react";
import './App.css';
import Counter from './components/Counter';
import Result from './components/Result';

function App() {
    const [counters, setCounters] = useState([0, 0, 0, 0, 0]);

    const handleImageClick = (index) => {
        const updatedCounters = [...counters];
        updatedCounters[index]++;
        setCounters(updatedCounters);
    }

  return (
    <div className="App">
      <Counter counters={counters} handleImageClick={handleImageClick} />
      <Result counters={counters} />
    </div>
  );
}

export default App;
