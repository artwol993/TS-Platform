import React from 'react';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import AddLoad from './components/pages/AddLoad'


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/addLoad' exact component={AddLoad} />
          <Route path=/s
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
