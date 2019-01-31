import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import { Button } from 'react-bootstrap';
import Form from 'react-bootstrap/Form';
import InputGroup from 'react-bootstrap/InputGroup';
import FormControl from 'react-bootstrap/FormControl';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
class User extends Component {
    constructor(props){
        super(props);
        this.state={
        userName:'',
          phone:'',
          email:'',
          message:''
         
        }
        this.handleNameChange = this.handleNameChange.bind(this);
        this.handleEmailChange = this.handleEmailChange.bind(this);
        this.handlePhoneChange = this.handlePhoneChange.bind(this); 
        this.handleSubmit = this.handleSubmit.bind(this); 
      } 
      
      handleSubmit(event) {
        event.preventDefault();
        //const data = new FormData(event.target);//can be used when form has more fields
        console.log(this.state.userName);
        console.log(this.state.email);
        console.log(this.state.phone);
      
        fetch('http://localhost:8080/user/createUser/'+this.state.userName+'/'+this.state.phone, {
          method: 'POST'//,
       
        });
        document.getElementById("create-user-form").reset();
        this.setState({ message: 'Member Added!' });
      }
      handleNameChange(e) {
       this.setState({ userName: e.target.value });
       this.setState({ message: '' });
      }
      handleEmailChange(e) {
        this.setState({ email: e.target.value });
         
       }
       handlePhoneChange(e) {
        this.setState({ phone: e.target.value });
         
       }
    render() {
   
            return (
               
          <div>         
      <Container>
  <Row>
  <Form id="create-user-form">
  <Form.Group controlId="forName">
    <Form.Label>Name</Form.Label>
    <Form.Control  value={this.state.value}
        placeholder={this.props.placeholderText}
        onChange={this.handleNameChange} type="text"  placeholder="Enter name" />
     </Form.Group>
  <Form.Group controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control value={this.state.value}
        placeholder={this.props.placeholderText}
        onChange={this.handleEmailChange} type="email" name="email" placeholder="Enter email" />
     </Form.Group>

  <Form.Group controlId="formBasicPhone">
    <Form.Label>Phone</Form.Label>
    <Form.Control value={this.state.value}
        placeholder={this.props.placeholderText}
        onChange={this.handlePhoneChange} type="text" name="phone" placeholder="Phone#" />
  </Form.Group>
 
  <Button variant="primary"  onClick={this.handleSubmit}>
    Submit
  </Button>
  <div>{this.state.message}</div>
</Form>;
  </Row>
 
    
</Container>;

      
      </div>
                 
               
            );
      

    }
}

export default User