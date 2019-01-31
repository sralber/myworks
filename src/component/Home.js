import React, { Component } from 'react';
import Container from 'react-bootstrap/Container'
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Table from 'react-bootstrap/Table'
class Home extends Component {
    
    render() {
        
        var imageName1 = require('./images/images1.jfif')
        var imageName2 = require('./images/images2.jfif')
        var imageName3 = require('./images/images3.jfif')
        var imageName4 = require('./images/images4.jfif')
        var imageName5 = require('./images/images5.jfif')
        var imageName6 = require('./images/images6.jfif')
        var imageName7 = require('./images/images7.jfif')
        var imageName8 = require('./images/images8.jfif')
        var imageName9 = require('./images/images9.jfif')
        var imageName10 = require('./images/images10.jfif')
        
            return (
                <div className="App">
                 <Container>
                     <Row>
                     <Col><img src={imageName1} /></Col>
                     <Col><img src={imageName2} /></Col>
                     <Col><img src={imageName3} /></Col>
                     
                                        </Row>
                                        <Row>
                     <Col><img src={imageName4} /></Col>
                     <Col><img src={imageName5} /></Col>
                     <Col><img src={imageName6} /></Col>
                     
                                        </Row>
                                        <Row>
                     <Col><img src={imageName7} /></Col>
                     <Col><img src={imageName8} /></Col>
                     <Col><img src={imageName9} /></Col>
                     
                                        </Row>

                     </Container>
                </div>
            );
        
    }
}

export default Home