import React, {useState} from 'react';
import './App.css';

import {
  BrowserRouter as Router,
  Route,
  Switch,
} from 'react-router-dom'
import Nav from './components/layout/Nav/Nav';
import Header from './components/views/Header/Header';
import About from './components/views/AboutUs/About';
import Services from './components/views/Service/Services';
import Works from './components/views/Works/Works';
import Contact from './components/views/Contact/Contact';
import Footer from './components/layout/Footer/Footer';

function App() {

  const [menuResHeight, setMenuResHeight] = useState(0);

  const menuHeightNavToHome = (height)=>{
    setMenuResHeight(height)
  }


  return (
    <div className="App" style={{paddingTop:`${menuResHeight}px`}}>
      <Router >
        <Nav 
          menuHeightNavToHome={menuHeightNavToHome}
        />
        <Switch>
          <Route path="/" exact>
            <Header/>
            <About/>
            <Services/>
            <Works/>
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
