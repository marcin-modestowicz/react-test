import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import PrivateRoute from 'components/PrivateRoute';
import SimpleFunctional from 'components/SimpleFunctional';
import FunctionalWithState from 'components/FunctionalWithState';
import ClassComponent from './components/Class';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <div>
            <PrivateRoute exact path="/" component={SimpleFunctional} />
            <Route path="/login" component={FunctionalWithState} />
            <Route path="/functional" component={FunctionalWithState} />
            <Route path="/class" component={ClassComponent} />
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
