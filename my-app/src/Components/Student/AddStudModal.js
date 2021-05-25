import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddStudModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'student/',{
            method:'POST',
            headers:{
                'Accept':'application/json', 
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                StudentId:null, 
                StudentName:event.target.StudentName.value,
                Department:event.target.DepartmentName.value,
                DateOfJoining:event.target.DateOfJoining.value,
                PhotoFileName:"smth.png"
            }) 
        })      
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
        },
        (error)=>{
            alert('Failed');
        })
    }


    render(){
        return (
            <div className="container">

                <Modal {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >

                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Student
                        </Modal.Title>
                    </Modal.Header>  

                    <Modal.Body> 
                        <Row>
                            <Col sm={6}>

                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="StudentName">
                                        <Form.Label>Student Name</Form.Label>
                                        <Form.Control type="text" name="StudentName" required 
                                        placeholder="Student Name"/>
                                    </Form.Group>
                                    <Form.Group controlId="DepartmentName">
                                        <Form.Label>Department Name</Form.Label>
                                        <Form.Control type="text" name="DepartmentName" required 
                                        placeholder="Department Name"/>
                                    </Form.Group>
                                    <Form.Group controlId="DateOfJoining">
                                        <Form.Label>Date of Joining</Form.Label>
                                        <Form.Control type="date" name="DateOfJoining" required 
                                        placeholder="Date Of Joining"/>
                                    </Form.Group>
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Department
                                        </Button> 
                                    </Form.Group>
                                </Form>

                            </Col>
                        </Row>
                    </Modal.Body>

                    <Modal.Footer>
                        <Button variant="danger" onClick={this.props.onHide}>Close</Button>
                    </Modal.Footer>

                </Modal>

            </div>
        )
    }

}









