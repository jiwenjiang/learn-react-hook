import React, { Suspense, lazy } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
const UseStateView = lazy(() => import('./useStateView'));
const UseEffectView = lazy(() => import('./useEffectView'));

const styles = {
  padding: '10px'
}

function App() {
  return (
    <Router>
      <div style={styles}>
        <ul>
          <li>
            <Link to="/">UseStateView</Link>
          </li>
          <li>
            <Link to="/useEffectView">UseEffectView</Link>
          </li>
        </ul>

        <hr />
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/" component={UseStateView}></Route>
            <Route exact path="/useEffectView" component={UseEffectView}></Route>
          </Switch>
        </Suspense>
      </div>
    </Router>
  );
}

export default App;
