import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.scss';
import Home from './pages/Home';
import Room from './pages/Room';
import RoomsBanner from './pages/RoomsBanner';
import WaitingRoom from './pages/WaitingRoom';

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/chatting-app" component={Home} />
        <Route exact path="/chatting-app/waiting-room" component={WaitingRoom} />
        <Route exact path="/chatting-app/room/:id" component={Room} />
        <Route exact path="/chatting-app/rooms-banner" component={RoomsBanner} />
      </Switch>
    </Router>
  );
}

export default App;
