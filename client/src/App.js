import React from 'react';
import { io } from 'socket.io-client';
import { Route, Switch } from 'react-router-dom';

// importing pages 
import Home from './pages/home';
import Room from './pages/room';
import RoomDashboad from './pages/room_dashboard';
let socket;

function App() {
  React.useEffect(() => {
    socket = io('http://localhost:5000/');
    socket.emit('join', { name: 'Souvik' });
    console.log('souvik')
  }, [])
  return (
    <div>
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/room" exact component={Room} />
        <Route path="/room/:roomId" exact component={RoomDashboad} />
      </Switch>
    </div>
  );
}

export default App;
