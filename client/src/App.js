import React, { Component } from 'react';
import { HashRouter as Router, Route } from 'react-router-dom';
import NavBar from './components/Navbar/Navbar'
import Search from './pages/SearchBooks';
import Header from './components/Header/Header'

class App extends Component { 
  render () {
    return(
      <Router>
        <div>
          <NavBar />
          <Header />

            <Route exact path="/" component={Search} />
            <Route exact path="/search" component={Search} />
            {/* <Route exact path="/saved" component={SavedBooks} /> */}

        </div>
      </Router>
    )
  };
};

export default App;
