import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Generator from './components/Generator';
import Title from './components/Title'

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Title />
          <Route exact path="/" component={Generator} />
        </Switch>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
