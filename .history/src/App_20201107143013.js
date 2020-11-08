import React from 'react';
import Navbar from './components/Navbar';
import AddLoad from './components/pages/AddLoad';
import ShowLoads from './components/pages/ShowLoads';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';



function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/Add' component={NewLoad} />
          <Route path='/ShowLoads' component={ShowLoads} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
