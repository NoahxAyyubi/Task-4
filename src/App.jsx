import React, { useState } from 'react';
import './styles.css';

function App() {
  const [isBlackBackground, setIsBlackBackground] = useState(true);

  const toggleBackgroundColor = () => {
    setIsBlackBackground(!isBlackBackground);
  };

  return (
    <div className={`app-container ${isBlackBackground ? 'black-bg' : 'white-bg'}`}>
      <h1 className="app-heading">Hey, I will update add onto it, this is just the task requirements </h1>
      <p className="app-description">This is a styled React component.</p>
      <button onClick={toggleBackgroundColor}>Toggle Background Color</button>
    </div>
  );
}

export default App;
