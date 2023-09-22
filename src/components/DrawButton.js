import React from 'react';

const DrawButton = () => {
  const handleDraw = () => {
    // Implement draw functionality here
    // You'll need to fetch a card from the API and update the Card component
  };

  return (
    <button onClick={handleDraw}>Draw Card</button>
  );
};

export default DrawButton;