import React from 'react';

const Loading = ({ size }) => {
  return (
    <div className='lds-ring'>
      <div style={{ width: `${size}`, height: `${size}` }}></div>
      <div style={{ width: `${size}`, height: `${size}` }}></div>
      <div style={{ width: `${size}`, height: `${size}` }}></div>
      <div style={{ width: `${size}`, height: `${size}` }}></div>
    </div>
  );
};

export default Loading;
