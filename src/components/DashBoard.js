import React, { Component } from 'react'
import Button from 'react-bootstrap/Button'
import Header from './Header'
import Modal from 'react-bootstrap/Modal'
import Form from 'react-bootstrap/Form'
import Table from 'react-bootstrap/Table'
import axios from 'axios'

export class DashBoard extends Component {
    constructor(props) {
        super(props)
    
        this.state = {
             show:false,
             employee_name:'',
             employee_salary:'',
             employee_age:'',
             lists:[],
             flag: false,
        }
    }

    handleOpen = (e) => {
        e.preventDefault();
        this.setState({
          show: true,
        });
      };
    
      handleClose = (e) => {
        e.preventDefault();
        this.setState({
          show: false,
        });
      };

      onChangeHandler = (e) => {
        this.setState({
          [e.target.name]: e.target.value,
        });
      };
    
    componentDidMount(){
        axios.get("http://dummy.restapiexample.com/api/v1/employees")
        .then(res=>this.setState({
            lists:res.data.data
        }))
    }

    onClickHandler=(e)=>{
        e.preventDefault();
        const details={
            employee_name:this.state.employee_name,
            employee_salary:this.state.employee_salary,
            employee_age:this.state.employee_age,
        }
        console.log(details)
        let config = {
            headers: {
                'Content-Type': 'application/json',
                'accept':'application/json',
            }
          };
        axios.post("http://dummy.restapiexample.com/api/v1/create",details,config)
        this.setState({
            show:false,
             employee_name:'',
             employee_salary:'',
             employee_age:'',
        })
    }

    onDelete(e,i){
        e.preventDefault();
        
    }

    render() {
        return (
            <div>
                <Header/>
                <Button style={{margin:'40px auto'}}
                    variant="outline-dark"
                    className="btn-style"
                    onClick={this.handleOpen}
                >
                    Add Employee
                </Button>
                <Modal show={this.state.show} className="modal-style">
                    <Modal.Dialog className="modal-dialog-style">
                    <Modal.Header>
                        <Modal.Title className="modal-title-style">
                            {this.state.flag ? "Update Details" : "Add Employee"}
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Form>
                        <Form.Group>
                            <Form.Label className="form-lbl-style">
                                Name
                            </Form.Label>      
                            <Form.Control
                                className="input-modal-style"
                                type="text"
                                placeholder=" Enter Employee Name"
                                name="employee_name"
                                value={this.state.employee_name}
                                onChange={this.onChangeHandler}
                            />        
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="form-lbl-style">
                                Salary
                            </Form.Label>
                            <Form.Control
                                className="input-modal-style"
                                type="number"
                                placeholder=" Enter Salary"
                                name="employee_salary"
                                value={this.state.employee_salary}
                                onChange={this.onChangeHandler}
                            />
                        </Form.Group>
                        <Form.Group>
                            <Form.Label className="form-lbl-style">
                                Age
                            </Form.Label>
                            <Form.Control
                                className="input-modal-style"
                                type="number"
                                placeholder=" Enter Age"
                                name="employee_age"
                                value={this.state.employee_age}
                                onChange={this.onChangeHandler}>
                            </Form.Control>
                        </Form.Group>
                        </Form>
                    </Modal.Body>

                    <Modal.Footer>
                        {this.state.flag ? (
                            <Button
                            className="modal-btn-style"
                            variant="outline-success"
                            onClick={(e) => {
                                this.onUpdate(e);
                            }}
                            disabled={!this.state.employee_name}
                            >
                            Update
                            </Button>
                        ) : (
                            <Button
                                className="modal-btn-style"
                                variant="outline-success"
                                onClick={(e) => {
                                    this.onClickHandler(e);
                                }}
                                disabled={!this.state.employee_name}
                            >
                            Add
                            </Button>
                        )}

                        <Button
                            variant="outline-danger"
                            onClick={(e) => {
                            this.handleClose(e);
                            }}
                        >
                        Close
                    </Button>
                    </Modal.Footer>
                </Modal.Dialog>
                </Modal>
                <div>
                {
                    this.state.lists.map((list,i)=>(
                        <Table striped bordered hover key={list.id}>
                            <thead>
                                <tr>
                                    <th>No</th>
                                    <th>Employee Name</th>
                                    <th>Salary</th>
                                    <th>Age</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>{list.id}</td>   
                                    <td>{list.employee_name}</td>
                                    <td>{list.employee_salary}</td>
                                    <td>{list.employee_age}</td>
                                    <td>
                                        <Button
                                            variant="outline-warning"
                                            className="list-btn-style"
                                            style={{marginRight:'10px'}}
                                            onClick={(e) => {
                                                this.onEdit(e, list, i);
                                            }}
                                        >
                                        Edit
                                        </Button>
                                        <Button
                                            variant="outline-danger"
                                            onClick={(e) => {
                                                this.onDelete(e, i);
                                            }}
                                        >
                                        Delete
                                        </Button>
                                    </td>
                                </tr>
                            </tbody>
                        </Table>
                    ))
                }
                </div>
            </div>
        )
    }
}

export default DashBoard
