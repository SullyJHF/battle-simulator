import React, { useEffect, useState } from 'react';
import { useSetInterval } from '../../utils';
import './die.scss';

export const Die = ({ value, rolling }) => {
  const [displayedValue, setDisplayedValue] = useState(value);

  useSetInterval(() => {
    const num = Math.floor(Math.random() * 6 + 1);
    setDisplayedValue(num);
  }, 100, rolling);
  useEffect(() => {
    if (!rolling) { setDisplayedValue(value); }
  }, [rolling]);

  switch (displayedValue) {
    case 1:
      return (
        <div className="die">
          <div className="dot center" />
        </div>
      );
    case 2:
      return (
        <div className="die">
          <div className="dot top right" />
          <div className="dot bottom left" />
        </div>
      );
    case 3:
      return (
        <div className="die">
          <div className="dot top right" />
          <div className="dot center" />
          <div className="dot bottom left" />
        </div>
      );
    case 4:
      return (
        <div className="die">
          <div className="dot top right" />
          <div className="dot top left" />
          <div className="dot bottom left" />
          <div className="dot bottom right" />
        </div>
      );
    case 5:
      return (
        <div className="die">
          <div className="dot top right" />
          <div className="dot top left" />
          <div className="dot center" />
          <div className="dot bottom left" />
          <div className="dot bottom right" />
        </div>
      );
    case 6:
    default:
      return (
        <div className="die">
          <div className="dot top right" />
          <div className="dot top left" />
          <div className="dot left" />
          <div className="dot right" />
          <div className="dot bottom left" />
          <div className="dot bottom right" />
        </div>
      );
  }
};
