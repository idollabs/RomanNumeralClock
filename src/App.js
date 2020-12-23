import React, { useState, useEffect } from 'react';
import Minute from './minute';

const App = () => {
  const [dt, setDt] = useState(new Date().toLocaleString());
  const [value, setValue] = useState(0);
  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  let hourString = dt.slice(11, -9);
  let hourNum = parseInt(hourString);
  let minuteString = dt.slice(14 + value, -6);
  let minuteNum = parseInt(minuteString);
  let secondString = dt.slice(17 + value, -3);
  let secondNum = parseInt(secondString);

  const colan = (time) => {
    if (time !== 0) {
      return ':';
    }
  };

  const adjustSplice = () => {
    if (hourNum >= 10) {
      setValue(1);
    } else {
      setValue(0);
    }
  };

  return (
    <>
      <h1>TEMPUS</h1>
      <div className='clock'>
        {Minute[hourNum]} <span id='colan'>:</span> {Minute[minuteNum]}{' '}
      </div>
      <div id='seconds'>
        {colan(secondNum)} {Minute[secondNum]}
      </div>
    </>
  );
};

export default App;
