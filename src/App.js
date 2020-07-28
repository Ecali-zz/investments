import React from 'react';
import './App.css';

import About from './pages/about';

import Nav from './components/nav';


import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';

function App() {
  return (
    <div className="App">
          <Nav />
    <Router>
        <Switch>
          <Route exact path="/about" component={About} />
          <Route exact path="/users">
            <Users />
          </Route>
          <Route  exact path="/">
            <Home />
          </Route>
        </Switch>
    </Router>
    </div>
  );
}

function Home() {
  return <h2>Home</h2>;
}



function Users() {
  return <h2>Users</h2>;
}

export default App;
