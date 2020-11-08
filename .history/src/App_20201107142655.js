import React from 'react';
import Navbar from './components/Navbar';
import NewLoad from './components/pages/NewLoad';
import ShowLoads from './components/pages/ShowLoads';
import Footer from './components/Footer';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import './App.css';
import Home from './components/pages/Home';
import NewLoad from './components/pages/NewLoad';


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
<Route path='/NewLoad' component={NewLoad}/>
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;
