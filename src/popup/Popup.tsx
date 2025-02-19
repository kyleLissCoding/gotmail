import React from 'react';

interface PopupProps {}

const Popup: React.FC<PopupProps> = () => {
  return (
    <div style={{ width: '300px', padding: '20px' }}>
      <h1>GotMail Assistant</h1>
      <p>Your AI Email Assistant!</p>
    </div>
  );
};

export default Popup; 