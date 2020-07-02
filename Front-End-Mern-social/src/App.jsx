import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import './App.css';
import Users from './user/pages/Users';
import NewPost from './posts/pages/NewPost';

function App() {
  return (
    <Router >
      <Switch>
        <Route path="/" exact >
          <Users />
        </Route>
        <Route path="/posts/new" exact>
          <NewPost />
        </Route>
        <Redirect to="/" />
      </Switch>
    </Router>
  );
}

export default App;
