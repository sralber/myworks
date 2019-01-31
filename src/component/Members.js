import React, { Component } from 'react';
import Table from 'react-bootstrap/Table'
class Members extends Component {
    constructor(props) {
        super(props);
        this.state = {
            items: [],
            isLoaded: false,
        }
    }
    componentDidMount() {

        fetch('http://localhost:8080/user/getUsers').then(res => res.json()).then(json => {
            this.setState({
                isLoaded: true,
                items: json,
            })
        });
    }
    render() {
        var { isLoaded, items } = this.state;
        if (!isLoaded) {
            return <div>Loading..</div>
        } else {
            return (
                <div className="App">
                    <Table striped bordered hover size="sm">
                        <thead>
                            <tr>
                                <th>#</th>
                                <th>Name</th>
                                <th>Phone</th>
                               
                            </tr>
                        </thead>
                        {items.map(item => (
                            <tbody>
                            <tr><td>{item.id}</td><td>{item.name}</td><td>{item.phone}</td></tr>
                            </tbody>
                       
                    ))}
                        
                    </Table>;
                 
                </div>
            );
        }

    }
}

export default Members