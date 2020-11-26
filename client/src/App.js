import React from 'react';
import { io } from 'socket.io-client'

let socket;

function App() {
  React.useEffect(() => {
    socket = io('http://localhost:5000/');
    socket.emit('join', {name: 'Souvik'});
    console.log('souvik')
  }, [])
  return (
    <div>
      <h1>
        Quizzer App
      </h1>
    </div>
  );
}

export default App;
