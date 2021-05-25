import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class EditStudModal extends Component {
    constructor(props){
        super(props); 
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        var name = "smth.png"
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'student/',{
            method:'PUT',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                // StudentId:event.target.StudentId.value,
                // StudentName:event.target.StudentName.value,
                // Department:event.target.Department.value,
                // DateOfJoining:event.target.DateOfJoining.value,
                // PhotoFileName: name
                    StudentName: "bbbb",
                    Department: "Software",
                    DateOfJoining: "2017-01-20",
                    PhotoFileName: "smth.png"
            
            })
        })
        .then(res=>res.json())
        .then((result)=>{
            alert(result);
            console.log("hhh")
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
                            Edit Student
                        </Modal.Title>
                    </Modal.Header>

                    <Modal.Body>
                        <Row>
                            <Col sm={6}>
                            <Form onSubmit={this.handleSubmit}>

                                    <Form.Group controlId="StudentId">
                                        <Form.Label>Student Id</Form.Label>
                                        <Form.Control type="text" name="StudentId" required 
                                        disabled
                                        defaultValue={this.props.studid}
                                        placeholder="Student Id"/>
                                    </Form.Group>

                                    <Form.Group controlId="DepartmentName">
                                        <Form.Label>Student Name</Form.Label>
                                        <Form.Control type="text" name="StudentName" required 
                                        defaultValue={this.props.studname}
                                        placeholder="Student Name"/>
                                    </Form.Group>

                                    <Form.Group controlId="Department">
                                        <Form.Label>Department</Form.Label>
                                        <Form.Control type="text" name="Department" required 
                                        defaultValue={this.props.depart}
                                        placeholder="Department"/>
                                    </Form.Group>

                                    <Form.Group controlId="DateOfJoining">
                                        <Form.Label>Date of Joining</Form.Label>
                                        <Form.Control type="date" name="DateOfJoining" required 
                                        defaultValue={this.props.dateOfJoin}
                                        placeholder="Date Of Joining"/>
                                    </Form.Group>

                                   
                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Edit Student
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