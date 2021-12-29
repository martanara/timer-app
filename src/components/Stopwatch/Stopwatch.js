const Stopwatch = ({ time }) => {
  
  const min = ("0" + Math.floor((time / 60000) % 60)).slice(-2);
  const sec = ("0" + Math.floor((time / 1000) % 60)).slice(-2);
  const miliSec = ("0" + ((time / 10) % 100)).slice(-2);

  return <h1>{min}:{sec}:{miliSec}</h1>
}

export default Stopwatch;