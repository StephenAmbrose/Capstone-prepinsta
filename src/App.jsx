import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './/components/Pages/Home';
import Login from './/components/Pages/Login';
import Register from './/components/Pages/Register';

// Accessing environment variable
const apiUrl = process.env.REACT_APP_API_URL;

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/login" component={Login} />
        <Route exact path="/register" component={Register} />
      </Switch>
    </Router>
  );
};

export default App;
