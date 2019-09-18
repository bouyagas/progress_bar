import React from 'react';

export default function ProgressBar(props) {
  return (
    <div className="bar">
      <div className={props.class} style={{ width: `${props.width}%` }}></div>
    </div>
  );
}
