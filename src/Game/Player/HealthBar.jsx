import React from 'react';
import './health-bar.scss';

export const HealthBar = ({ health, maxHealth, reverse }) => (
  <div className={`health-wrapper${reverse ? ' reverse' : ''}`}>
    <div className="remaining" style={{ width: `${(100 * health) / maxHealth}%` }} />
  </div>
);
