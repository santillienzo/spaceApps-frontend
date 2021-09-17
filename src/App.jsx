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

function App() {
  return (
    <div className="App">
      <Router>
        <Nav/>
        <Switch>
          <Route path="/" exact>
            <Header/>
            <About/>
            <Services/>
            <Works/>
            <Contact/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
