import React from 'react';


const ProgressBar = ({ percent=10 }) => {
  const progressBarStyle = {
    width: '100%',
    height: '20px',
    borderRadius: '5px',
    backgroundColor: 'lightgrey',
    overflow: 'hidden',
  };

  const progressStyle = {
    width: `${percent}%`,
    height: '100%',
    borderRadius: '5px',
    backgroundColor: 'green',
  };

  return (
    <div style={progressBarStyle}>
      <div style={progressStyle}></div>
    </div>
  );
};


export default ProgressBar;
