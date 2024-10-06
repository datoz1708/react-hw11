import React from 'react';

function Message(props) {
  const showAlert = () => {
    alert(`${props.firstName} ${props.lastName}!`);
  };

  return (
    <div>
      <button onClick={showAlert}>შეტყობინება</button>
    </div>
  );
}

export default Message;
