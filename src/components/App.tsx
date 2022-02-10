import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomeScreen from "./HomeScreen";
import {Global, css} from '@emotion/react';

const globalStyles = css`
  body {
    margin: 0;
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
          
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New', monospace;
  }
`;

const App: React.FC = () => {
  return (
    <>
      <Global styles={globalStyles} />
      <Router>
        <Switch>
          <Route path="/:slug?">
            <HomeScreen />
          </Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;
