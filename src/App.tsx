import React from 'react';
import './App.css';
import Player from "./components/Player";
import StationList from "./components/StationList";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/">
          <div className="App">
            <Player />
            <div className="container">
              <StationList />
            </div>
          </div>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
