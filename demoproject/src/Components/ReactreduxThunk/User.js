import React, { Component } from 'react';
import { Form, Button, Container, Row, Col, Card, Table } from 'react-bootstrap';
import { Add, Delete } from './Action';
import { connect } from 'react-redux';

class User extends Component {
    constructor(props) {
        super(props)

        this.initialState = {
            id: 0,
            name: "",
            age: 0,
            address: "",
            gender: "Male"
        }

        this.state = this.initialState
        this.onChangeHandler = this.onChangeHandler.bind(this);
        this.onSubmitHandler = this.onSubmitHandler.bind(this);
    }

    onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log("Name =>" + name + " Value=>" + value);
        this.setState({
            [name]: value
        })
        // console.log(this.state);
    }

    onSubmitHandler = (event) => {
        event.preventDefault();
        const user = this.state;
        this.props.AddUser(user);
        this.setState(this.initialState);
    }

    onDeleteHandler(id) {
        this.props.DeleteUser(id);
    }

    render() {
        console.log(this.props.users)
        return (
            <div>
                <Card className="bg-dark text-white card-center">
                    <Card.Header>
                        User Registration
                    </Card.Header>
                    <Card.Body>
                        <Container>
                            <Form onSubmit={this.onSubmitHandler}>
                                <Row>
                                    <Form.Group as={Col} controlId="formName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="name"
                                            value={this.state.name}
                                            onChange={this.onChangeHandler}
                                            placeholder="Enter name" />
                                    </Form.Group>

                                    <Form.Group as={Col} controlId="formGridAge">
                                        <Form.Label>Age</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="age"
                                            value={this.state.age}
                                            onChange={this.onChangeHandler}
                                            placeholder="Enter age" />
                                    </Form.Group>
                                </Row>
                                <Row>
                                    <Form.Group as={Col} controlId="formGridAddress">
                                        <Form.Label>Address</Form.Label>
                                        <Form.Control
                                            type="textarea"
                                            name="address"
                                            value={this.state.address}
                                            onChange={this.onChangeHandler}
                                            placeholder="1234 Main St" />
                                    </Form.Group>
                                    <Form.Group as={Col}>
                                        <Form.Label>Gender</Form.Label>
                                        <Form.Check
                                            type="radio"
                                            label="Male"
                                            name="gender"
                                            value="Male"
                                            checked={this.state.gender === "Male" ? "checked" : ""}
                                            onChange={this.onChangeHandler} />
                                        <Form.Check
                                            type="radio"
                                            label="Female"
                                            name="gender"
                                            value="Female"
                                            checked={this.state.gender === "Female" ? "checked" : ""}
                                            onChange={this.onChangeHandler} />
                                        <Form.Check
                                            type="radio"
                                            label="Other"
                                            name="gender"
                                            value="Other"
                                            checked={this.state.gender === "Other" ? "checked" : ""}
                                            onChange={this.onChangeHandler} />
                                    </Form.Group>
                                </Row>
                                <Button variant="primary" type="submit">
                                    Submit
                                </Button>

                            </Form>
                        </Container>
                    </Card.Body>
                </Card >
                {this.props.users.length > 0 ?
                    <Container>
                        <Table striped bordered hover>
                            <thead>
                                <tr>
                                    <th>Name</th>
                                    <th>Age</th>
                                    <th>Address</th>
                                    <th>Gender</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    this.props.users.map(element => {
                                        return (
                                        <tr key={element.id}>
                                            <td>{element.name}</td>
                                            <td>{element.age}</td>
                                            <td>{element.address}</td>
                                            <td>{element.gender}</td>
                                            <td><Button onClick={() => this.onDeleteHandler(element.id)}>Delete</Button></td>
                                        </tr>)
                                    })
                                }
                            </tbody>
                        </Table>
                    </Container>
                    : ""}
            </div>
        )
    }
}


const mapStateToProps = (state) => {
    return {
        users: state.users
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        AddUser: (user) => dispatch(Add(user)),
        DeleteUser: (id) => dispatch(Delete(id))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(User)

