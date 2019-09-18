import React from 'react';

export default function Slider(props) {
  return (
    <div>
      <input
        type="range"
        min="0"
        max="100"
        value={props.value}
        onChange={e => props.setValue(e.target.value)}
      />
    </div>
  );
}
