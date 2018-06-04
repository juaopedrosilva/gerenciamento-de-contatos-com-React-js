import React from 'react'; 
import { BrowserRouter as Router,Route } from 'react-router-dom';

import Home from './components/Home';
import About from './components/About';
import NewContact from './components/NewContact';
import Edit from './components/Edit';
import Login from './components/Login'; 

export default class App extends React.Component {
  
   render() {
    return (
      <Router>
        <div> 
          <Route exact path='/' component={Home} /> 
          <Route exact path='/about' component={About} />
          <Route exact path='/new' component={NewContact} />
          <Route path='/edit/:id' component={Edit} /> 
        </div>
      </Router>
    );
  }
} 
