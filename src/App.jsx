import React, {useEffect, useState} from 'react';
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
  const [darkMode, setDarkMode] = useState(false)

  const menuHeightNavToHome = (height)=>{
    setMenuResHeight(height)
  }

  const changeTheme = ()=>{
    if (darkMode) {
      document.documentElement.style.setProperty('--global-primary-color', 'var(--dark-primary-color)');
      document.documentElement.style.setProperty('--global-secondary-color', 'var(--dark-secondary-color)');
      document.documentElement.style.setProperty('--global-tertiary-color', 'var(--dark-tertiary-color)');
      document.documentElement.style.setProperty('--global-inverse-color', 'var(--ligth-primary-color)');
      document.documentElement.style.setProperty('--global-text_color', 'var(--dark-primary-text_color)');
      
      document.documentElement.style.setProperty('--global-input_placeholder-color', 'var(--global-gray)');
      document.documentElement.style.setProperty('--global-input_border-color', 'var(--global-gray2)');
      document.documentElement.style.setProperty('--global-social_media-background', 'var(--global-primary-color)');

      document.documentElement.style.setProperty('--global-menu_res-background', 'var(--global-gray4)');
    }else{
      document.documentElement.style.setProperty('--global-primary-color', 'var(--ligth-primary-color)');
      document.documentElement.style.setProperty('--global-secondary-color', 'var(--ligth-secondary-color)');
      document.documentElement.style.setProperty('--global-tertiary-color', 'var(--ligth-tertiary-color)');
      document.documentElement.style.setProperty('--global-inverse-color', 'var(--dark-primary-color)');
      document.documentElement.style.setProperty('--global-text_color', 'var(--ligth-primary-text_color)');
      
      document.documentElement.style.setProperty('--global-input_placeholder-color', 'var(--global-gray2)');
      document.documentElement.style.setProperty('--global-input_border-color', 'var(--global-gray3)');
      document.documentElement.style.setProperty('--global-social_media-background', 'var(--global-gray)');
      
      document.documentElement.style.setProperty('--global-menu_res-background', 'var(--global-gray)');
    }
  }

  useEffect(()=>{
    changeTheme()
  }, [darkMode])




  return (
    <div className="App" style={{paddingTop:`${menuResHeight}px`}}>
      <Router >
        <Nav 
          menuHeightNavToHome={menuHeightNavToHome}
          setDarkMode={setDarkMode}
        />
        <Switch>
          <Route path="/" exact>
            <Header/>
            <About/>
            <Services/>
            {/* <Works/> */}
            <Contact/>
          </Route>
        </Switch>
        <Footer/>
      </Router>
    </div>
  );
}

export default App;
