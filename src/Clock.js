import React, { useState, useEffect } from 'react';
import Minute from './minute';
import pillarMiddle from './images/romanpillarelementsmiddle.png';
import pillarTop from './images/romanpillarelementstop.png';
import pillarBottom from './images/romanpillarelementsbottom.png';

const Clock = () => {
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
    <>
      <div className='appHousing'>
        <div id='topper'>
          <img id='leftPillar' src={pillarTop} alt='' />
          <div className='spacer'>
            <div className='title-and-button'>
              <h1>TEMPVS</h1>

              <button id='militaryBtn' onClick={makeMilitary}>
                {buttonValue}
              </button>
              <br />
            </div>
          </div>
          <img id='rightPillar' src={pillarTop} alt='' />
        </div>

        <div className='clockHousing'>
          <img className='leftPillar' src={pillarMiddle} alt='' />
          <div className='clockInnerHousing'>
            <div className='clock'>
              {Minute[hours12(dt.getHours())]} <span id='colan'>: </span>
              {Minute[dt.getMinutes()]}
            </div>
            <div id='seconds'>: {Minute[dt.getSeconds()]}</div>
            <article id='timeOfDay'>{amPmHandler(dt.getHours())}</article>
          </div>
          <img className='rightPillar' src={pillarMiddle} alt='' />
        </div>

        <div id='bottom'>
          <img id='leftPillar' src={pillarBottom} alt='' />
          <div className='spacer'></div>
          <img id='rightPillar' src={pillarBottom} alt='' />
        </div>
      </div>
    </>
  );
};

export default Clock;
