import { useEffect } from 'react';
import Button from '../Button/Button';
import Stopwatch from '../Stopwatch/Stopwatch'

const Timer = ({ currentTime, setCurrentTime, timer, setTimer }) => {

  const start = () => {
    setTimer(setInterval(() => {
      setCurrentTime(currentTime => currentTime + 10);
    }, 10));
    clearInterval(timer);
  }

  const stop = () => {
    clearInterval(timer);
  }

  const reset = () => {
    setCurrentTime(0)
  }

  useEffect(() => {
    return () => {
       if(timer) clearInterval(timer);
    };
  }, []);

  return (
    <div>
      <Stopwatch time={currentTime}/>
      <Button onClick={start}>Start</Button>
      <Button onClick={stop}>Stop</Button>
      <Button onClick={reset}>Reset</Button>
    </div>
  )
}

export default Timer;

