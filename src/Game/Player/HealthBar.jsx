import React from 'react';
import './health-bar.scss';

export const HealthBar = ({ health, maxHealth }) => (
  <div className="health-wrapper">
    <div className="remaining" style={{ width: `${(100 * health) / maxHealth}%` }} />
  </div>
);
