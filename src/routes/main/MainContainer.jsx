import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import MainPresenter from './MainPresenter';
import { getToday } from '../../utils/getToday';

const MainContainer = props => {
  useEffect(() => {
    init();
  }, []);

  const [thisYear, setThisYear] = useState(new Date().getFullYear());
  const [thisMonth, setThisMonth] = useState(new Date().getMonth() + 1);

  let firstDay = new Date(thisYear, thisMonth, 1).getDate();
  let lastDay = new Date(thisYear, thisMonth, 0).getDate();

  const init = () => {
    const result = getToday();
  };

  const handleYear = what => {
    if (what === '-') {
      setThisYear(thisYear - 1);
    } else if (what === '+') {
      setThisYear(thisYear + 1);
    }
  };

  const handleMonth = what => {
    if (what === '-') {
      if (thisMonth === 1) {
        setThisMonth(12);
        setThisYear(thisYear - 1);
      } else {
        setThisMonth(thisMonth - 1);
      }
    } else if (what === '+') {
      if (thisMonth === 12) {
        setThisMonth(1);
        setThisYear(thisYear + 1);
      } else {
        setThisMonth(thisMonth + 1);
      }
    }
  };
  const makeAllDays = () => {
    let allDays = [];
    for (let i = firstDay; i < lastDay + 1; i++) {
      allDays.push(i);
    }
    return allDays;
  };
  const renderCalendar = () => {
    const allDays = makeAllDays();
    return allDays.map((d, i) => <div key={i}>{d}</div>);
  };
  return (
    <>
      <div>
        <button onClick={() => handleYear('-')}>-</button>
        {thisYear}
        <button onClick={() => handleYear('+')}>+</button>
      </div>
      <div>
        <button onClick={() => handleMonth('-')}>-</button>
        {thisMonth}
        <button onClick={() => handleMonth('+')}>+</button>
      </div>
      <div>{renderCalendar()}</div>
    </>
  );
};

MainContainer.propTypes = {};

export default MainContainer;
