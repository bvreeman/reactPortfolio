import React, { Component } from 'react';
import './App.css';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HeaderNav from './components/HeaderNav'

// Pages
import ContactUsPage from './pages/ContactUsPage'
import AboutMe from './pages/AboutMe'
import MyProjects from './pages/MyProjects'



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <HeaderNav />
            <Switch>
              <Route exact path='/' component={AboutMe}/>
              <Route exact path='/MyProjects' component={MyProjects}/>
              <Route exact path='/ContactUsPage' component={ContactUsPage}/>
            </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
