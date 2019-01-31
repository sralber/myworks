import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter, Route,Link,NavLink,Switch} from 'react-router-dom';
import Home from './component/Home';
import User from './component/User';
import Members from './component/Members';
import Contact from './component/Contact';
import Error from './component/Error';
import Navigation from './component/Navigation';
const User1 =()=>{
  return (<h1>hi</h1>)
}
class App extends Component {
  render() {
    return (
     
      <BrowserRouter>
        <div>
          <Navigation></Navigation>
          <Switch>
          <Route path="/" exact component={Home}></Route>
          <Route path="/contact" exact component={Contact}></Route>
          <Route path="/user" exact component={User}></Route>
          <Route path="/members" exact component={Members}></Route>
          <Route component={Error}></Route>
          </Switch>
          
       
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
