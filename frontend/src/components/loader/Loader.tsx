import React from 'react';
import './Loader.css';

const MyComponent = () => {
  return (
    <div className="lds-roller">
      <div />
      <div />
      <div />
      <div />
      <div />
      <div />
      <div></div>
      <div></div>
    </div>
  );
};

MyComponent.propTypes = {};

export default MyComponent;
