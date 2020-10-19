import React, { Component } from 'react'
import Navbar from 'react-bootstrap/Navbar'
import Button from 'react-bootstrap/Button'

import { connect } from "react-redux";

class Header extends Component {
    routeChange=()=>{
        this.props.history.push("/");
    }
    render() {
        return (
            <div>
                <Navbar bg="dark" variant="dark">
                    <Navbar.Brand>Hello,{this.props.email}</Navbar.Brand>
                    <Button variant="outline-info" onClick={this.routeChange}>
                        Logout
                    </Button>
                </Navbar>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
      email: state.email,
    };
};

export default connect(mapStateToProps,null)(Header)
