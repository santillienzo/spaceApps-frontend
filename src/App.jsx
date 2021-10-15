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
import Contact from './components/views/Contact/Contact';
import Footer from './components/layout/Footer/Footer';
import Admin from './components/views/Admin/Admin';

function App() {

  const [menuResHeight, setMenuResHeight] = useState(0);
  const [darkMode, setDarkMode] = useState(false)

  const menuHeightNavToHome = (height)=>{
    setMenuResHeight(height)
  }

  const changeTheme = ()=>{
    const style = document.documentElement.style;

    if (darkMode) {
      style.setProperty('--global-primary-color', 'var(--dark-primary-color)');
      style.setProperty('--global-secondary-color', 'var(--dark-secondary-color)');
      style.setProperty('--global-tertiary-color', 'var(--dark-tertiary-color)');
      style.setProperty('--global-inverse-color', 'var(--ligth-primary-color)');
      style.setProperty('--global-text_color', 'var(--dark-primary-text_color)');
      
      style.setProperty('--global-input_placeholder-color', 'var(--global-gray)');
      style.setProperty('--global-input_border-color', 'var(--global-gray2)');
      style.setProperty('--global-social_media-background', 'var(--global-primary-color)');

      style.setProperty('--global-menu_res-background', 'var(--global-gray4)');

      style.setProperty('--dashboard-text_color', 'var(--global-gray)');
      style.setProperty('--dashboard-background', 'var(--global-gray4)');
    }else{
      style.setProperty('--global-primary-color', 'var(--ligth-primary-color)');
      style.setProperty('--global-secondary-color', 'var(--ligth-secondary-color)');
      style.setProperty('--global-tertiary-color', 'var(--ligth-tertiary-color)');
      style.setProperty('--global-inverse-color', 'var(--dark-primary-color)');
      style.setProperty('--global-text_color', 'var(--ligth-primary-text_color)');
      
      style.setProperty('--global-input_placeholder-color', 'var(--global-gray2)');
      style.setProperty('--global-input_border-color', 'var(--global-gray3)');
      style.setProperty('--global-social_media-background', 'var(--global-gray)');
      
      style.setProperty('--global-menu_res-background', 'var(--global-gray)');
      
      style.setProperty('--dashboard-text_color', 'var(--global-gray3)');
      style.setProperty('--dashboard-background', 'var(--global-ligth-gray)');
    }
  }

  useEffect(()=>{
    changeTheme()

    //eslint-disable-next-line react-hooks/exhaustive-deps
  }, [darkMode])




  return (
    <div className="App" style={{paddingTop:`${menuResHeight}px`}}>
      <Router >
        <Nav 
          menuHeightNavToHome={menuHeightNavToHome}
          setDarkMode={setDarkMode}
          darkMode= {darkMode}
        />
        <Switch>
          <Route path="/" exact>
            <Header/>
            <About/>
            <Services/>
            <Contact/>
            <Footer/>
          </Route>

          <Route path="/admin">
            <Admin/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
