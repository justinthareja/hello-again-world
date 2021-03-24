import './App.css';
import { useEffect, useRef, useState } from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [isRunning, setIsRunning] = useState(true);
  const [delay, setDelay] = useState(1000);

  useInterval(() => {
    setCount(count + 1)
  }, isRunning ? delay : null);

  return (
    <h1>{count}</h1>
  )
   
}

function useInterval(callback, delay) {
  const savedCallback = useRef();

  useEffect(() => {
    savedCallback.current = callback;  
  });

  useEffect(() => {
    function tick() {
      savedCallback.current();
    }

    if (delay !== null) {
      let id = setInterval(tick, 1000);
      return () => clearInterval(id);
    }
  }, [delay]);
}

export default App;
