import React, { useEffect, useRef, useState } from 'react';
import { usePrevious } from '../../utils';
import { DAMAGING, useGame } from '../gameSlice';
import './health-bar.scss';

const initialParticle = {
  yVel: -15,
  accel: 0.777,
  x: 0,
  y: 0,
};

export const HealthBar = ({ health, maxHealth, reverse }) => {
  const prevHealth = usePrevious(health);
  const { phase, damageTime } = useGame();
  const [damageValue, setDamageValue] = useState(null);
  const [damageX, setDamageX] = useState(0);
  const [damageY, setDamageY] = useState(0);
  const [damageXSpeed, setDamageXSpeed] = useState(0);
  const particle = useRef({ ...initialParticle });
  const start = useRef(null);

  const step = (timestamp) => {
    if (start.current == null) start.current = timestamp;
    const elapsed = timestamp - start.current;
    particle.current.yVel += particle.current.accel;
    setDamageY((prevY) => prevY + particle.current.yVel);
    setDamageX((prevX) => prevX + damageXSpeed);
    if (elapsed > damageTime) {
      setDamageValue(null);
      setDamageX(0);
      setDamageY(0);
      particle.current = { ...initialParticle };
      start.current = null;
      return;
    }
    window.requestAnimationFrame(step);
  };

  useEffect(() => {
    if (phase === DAMAGING) {
      window.requestAnimationFrame(step);
      const random = Math.random() - 0.5;
      setDamageXSpeed(random);
      setDamageValue(-(prevHealth - health));
    }
  }, [health]);

  const particleStyle = reverse ? (
    { left: `${100 - ((100 * health) / maxHealth) + damageX}%` }
  ) : (
    { left: `${(100 * health) / maxHealth + damageX}%` }
  );
  return (
    <div className={`health-wrapper${reverse ? ' reverse' : ''}`}>
      <div className="remaining" style={{ width: `${(100 * health) / maxHealth}%` }} />
      {damageValue !== null && (
        <div className="damage-particle" style={{ ...particleStyle, top: `${damageY}%` }}>{damageValue}</div>
      )}
    </div>
  );
};
