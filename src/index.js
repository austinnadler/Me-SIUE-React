import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'bootstrap/dist/css/bootstrap.min.css'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Header from './components/header';
import Home from './components/home/home';
import Projects from './components/projects/projects';


ReactDOM.render(
  <React.StrictMode>
    <Router>
        <Header/>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route path="/home" component={Home}/>
            <Route path="/projects" component={Projects}/>
        </Switch>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);
