import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from '../../redux/store';
import { Home } from '../Home/Home';
import { History } from '../History/History';
import './App.scss';

export function App() {
  return (
    <Provider store={store}>
    <Router >
      <div className="App">
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/history' exact component={History} />
        </Switch>
      </div>
    </Router>
    </Provider>
  );
}

