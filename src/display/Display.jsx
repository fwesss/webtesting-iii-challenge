import React from 'react';
import { useSelector } from 'react-redux';

const Display = () => {
  const { closed, locked } = useSelector(state => state.toggleGate);

  const closedClass = `led ${closed ? 'red-led' : 'green-led'}`;
  const lockedClass = `led ${locked ? 'red-led' : 'green-led'}`;

  return (
    <div className="display panel">
      <div className={lockedClass}>{locked ? 'Locked' : 'Unlocked'}</div>
      <div className={closedClass}>{closed ? 'Closed' : 'Open'}</div>
    </div>
  );
};

export default Display;
