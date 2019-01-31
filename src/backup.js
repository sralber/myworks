import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import {BrowserRouter, Route,Link,NavLink} from 'react-router-dom';
import Home from './component/Home';
import User from './component/User';
import Contact from './component/Contact';
const User1 =()=>{
  return (<h1>hi</h1>)
}
class Backup extends Component {
  render() {
    return (
     
      <BrowserRouter>
        <div>
          <Route path="/" component={Home}></Route>
          <Route path="/contact" component={Contact}></Route>
          <Route path="/user" component={User}></Route>
          <ul>
            <li>
        <NavLink activeStyle={{color:'pink'}} exact={true} to="/">Home</NavLink></li>
        <li> <NavLink to="/contact" exact={true} activeStyle={{color:'pink'}}>Contact</NavLink></li>
        </ul>
          <Route  path='/' exact strict render={() => {return (
            <h1>Welcomehome</h1>
          )}}/>
          <Route  path='/contact' exact strict render={() => {return (
            <h1>contact</h1>
          )}}/>
           <Route  path='/user' exact strict component={User1}/>
        </div>
      </BrowserRouter>
    );
  }
}

export default Backup;
