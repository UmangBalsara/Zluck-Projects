import React, { Component } from 'react'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { connect } from "react-redux";

class Login extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             email:'',
             password:'',
             password1:'admin@123',
        }
    }

    onChange=(e)=>{
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    onSubmit=(e)=>{
        e.preventDefault();
        if(this.state.password===this.state.password1){
            this.props.history.push('/dashboard');
            alert("login successfully...")
        }
        else{
            alert("Password is not match")
        }
        this.props.dispatch({
            type: "ADD_HEADER_EMAIL",
            payload: {
              email: this.state.email,
            },
        });
    }

    render() {
        return (
            <form className="form-style">
                <h1>Login</h1>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control type="email" 
                    placeholder="Enter email" 
                    name="email" 
                    value={this.state.email} 
                    onChange={this.onChange}
                    required/>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control type="password" 
                    placeholder="Password" 
                    name="password" 
                    value={this.state.password} 
                    onChange={this.onChange}
                    required/>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={this.onSubmit}>
                    Submit
                </Button>
            </form>
        )
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
      dispatch,
    };
};
  
export default connect(null, mapDispatchToProps)(Login);
