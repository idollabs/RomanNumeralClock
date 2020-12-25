import React, { useState, useEffect } from 'react';
import Minute from './minute';

const App = () => {
  const [dt, setDt] = useState(new Date().toLocaleString());
  const [value, setValue] = useState(0);
  const [military, setMilitary] = useState(0);
  const [isMilitary, setIsMilitary] = useState(true);
  const [hourButtonValue, setHourButtonValue] = useState('');
  const [showAmPm, setShowAmPm] = useState('');

  useEffect(() => {
    let secTimer = setInterval(() => {
      setDt(new Date().toLocaleString());
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  useEffect(() => {
    let secTimer = setInterval(() => {
      if (hourNum >= 10) {
        setValue(1);
      } else {
        setValue(0);
      }
    }, 1000);

    return () => clearInterval(secTimer);
  }, []);

  useEffect(() => {
    if (isMilitary && timeOfDay === 'PM' && hourNum !== 12) {
      setMilitary(12);
      setHourButtonValue('XII HOPAM HOROΛOΓIVM');
      setShowAmPm('');
    } else {
      setMilitary(0);
      setHourButtonValue('XXIV HOPAM HOROΛOΓIVM');
      setShowAmPm(timeOfDay);
    }
  }, [isMilitary]);

  let hourString = dt.slice(11, -9);
  let hourConst = parseInt(hourString);
  let hourNum = parseInt(hourString) + military;
  let minuteString = dt.slice(14 + value, -6);
  let minuteNum = parseInt(minuteString);
  let secondString = dt.slice(17 + value, -3);
  let secondNum = parseInt(secondString);
  let timeOfDay = dt.slice(20 + value);

  const colan = (time) => {
    if (time !== 0) {
      return ':';
    }
  };

  const makeMilitary = () => {
    if (!isMilitary) {
      setIsMilitary(true);
    } else {
      setIsMilitary(false);
    }
  };

  return (
    <main>
      <h1>TEMЛVS</h1>
      <button id='militaryBtn' onClick={makeMilitary}>
        {hourButtonValue}
      </button>

      <div className='clock'>
        {Minute[hourNum]} <span id='colan'>:</span> {Minute[minuteNum]}
      </div>
      <div id='seconds'>
        {/* {colan(secondNum)}  */}: {Minute[secondNum]}
      </div>
      <article id='timeOfDay'>{showAmPm}</article>
    </main>
  );
};

export default App;
