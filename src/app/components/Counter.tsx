import React, { useState, useEffect } from 'react';

export default function Counter(props: { c: boolean }) {
  const [seconds, setSeconds] = useState(0);
  const [minutes, setMinutes] = useState(0);

  useEffect(() => {
    // If not connected, reset the timer
    if (!props.c) {
      setSeconds(0);
      setMinutes(0);
      return;
    }
    
    const interval = setInterval(() => {
      // Update seconds
      setSeconds(prevSeconds => {
        if (prevSeconds === 59) {
          // If seconds reach 59, reset seconds and increment minutes
          setMinutes(prevMinutes => prevMinutes + 1);
          return 0;
        } else {
          // Otherwise, just increment seconds
          return prevSeconds + 1;
        }
      });
    }, 1000); // Run every second

    return () => clearInterval(interval);
  }, [props.c]);

  return (
    <div>
      <p className='text-2xl'>{minutes < 10 ? `0${minutes}` : minutes}:{seconds < 10 ? `0${seconds}` : seconds}</p>
    </div>
  );
}