import { useState } from 'react';

export const Controls = () => {
  const [show, setShow] = useState(true);
  const controls = [
    {
      action: 'Raise',
      controls: 'LClick'
    },
    {
      action: 'Size up',
      controls: 'RClick'
    },
    {
      action: 'Blue',
      controls: 'Pointer over'
    },
    {
      action: 'Red',
      controls: 'Pointer out'
    },
  ];

  return (
    <div className={`absolute controls ${!show ? 'fixed-height' : ''}`}>
      <h4>Controls</h4>

      {controls.map(control => (
        <div className="control" key={control.action}>
          <p>{control.action}</p>
          <p>{control.controls}</p>
        </div>
      ))}

      <div className={`toggle ${show ? 'rotate' : ''}`} onClick={(e) => {
        e.stopPropagation();
        setShow(prev => !prev)
      }}>&darr;</div>
    </div>
  );
};