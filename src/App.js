import Timer from './components/Timer/Timer.js'
import Container from './components/Container/Container.js';
import { useState } from 'react';

function App() {

  const [currentTime, setCurrentTime] = useState(0)
  const [timer, setTimer] = useState(null)

  return (
    <Container>
    <div>
      <Timer currentTime={currentTime} setCurrentTime={setCurrentTime} timer={timer} setTimer={setTimer}/>
    </div>
    </Container>
  );
}

export default App;
