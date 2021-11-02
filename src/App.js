import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Main from '../src/pages/Main';

function App() {
  return (
    <Router>
      <div className='main'>
        <Switch>
          <Route exact path="/" component={Main} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
