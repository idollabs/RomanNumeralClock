import React, { useState, useEffect } from 'react';
import Minute from './minute';

const App = () => {
  const [dt, setDt] = useState(new Date());
  const [isMilitary, setIsMilitary] = useState(true);

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  const hours12 = (date) => {
    if (!isMilitary) {
      return date % 12 || 12;
    } else return date;
  };

  const amPmHandler = (hours) => {
    if (!isMilitary) {
      if (hours > 11) {
        return 'PM';
      } else {
        return 'AM';
      }
    }
    return '';
  };

  // const buttonValue = (military) => {
  //   if (military) {
  //     return 'XII HORA HOROLOGIVM';
  //   } else {
  //     return 'XXVI HORA HOROLOGIVM';
  //   }
  // };

  const buttonValue = isMilitary
    ? 'XII HORA HOROLOGIVM'
    : 'XXVI HORA HOROLOGIVM';

  const makeMilitary = () => {
    if (!isMilitary) {
      setIsMilitary(true);
    } else {
      setIsMilitary(false);
    }
  };

  return (
    <main>
      <h1>TEMPVS</h1>
      <button id='militaryBtn' onClick={makeMilitary}>
        {buttonValue}
      </button>

      <div className='clock'>
        {Minute[hours12(dt.getHours())]} <span id='colan'>:</span>{' '}
        {Minute[dt.getMinutes()]}
      </div>
      <div id='seconds'>: {Minute[dt.getSeconds()]}</div>
      <article id='timeOfDay'>{amPmHandler(dt.getHours())}</article>
    </main>
  );
};

export default App;
