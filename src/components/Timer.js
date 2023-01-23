import { useEffect, useState } from "react";

const Timer = ({ time }) => {
  const [counter, setCounter] = useState(time);

  useEffect(() => {
    if (counter > 0) {
      setTimeout(() => setCounter(counter - 1), 1000);
    }
  }, [counter]);

  return (
    <span>
      {Math.floor(counter / 60)}:
      {counter % 60 < 10 ? `0${counter % 60}` : counter % 60}
    </span>
  );
};

export default Timer;
