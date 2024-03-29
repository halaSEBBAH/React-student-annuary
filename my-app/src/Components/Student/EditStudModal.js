import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form,Image} from 'react-bootstrap';

export class EditStudModal extends Component {
    constructor(props){
        super(props); 
        this.state={deps:[]};
        this.handleSubmit=this.handleSubmit.bind(this);
        this.handleFileSelected=this.handleFileSelected.bind(this);
    }

    photofilename = "anonymous.png";
    imagesrc = process.env.REACT_APP_PHOTOPATH+this.photofilename;

    componentDidMount(){
        fetch(process.env.REACT_APP_API+'department')
        .then(response=>response.json())
        .then(data=>{
            this.setState({deps:data});
        });
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
                StudentId:event.target.StudentId.value,
                StudentName:event.target.StudentName.value,
                Department:event.target.Department.value,
                DateOfJoining:event.target.DateOfJoining.value,
                PhotoFileName: this.photofilename
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

    handleFileSelected(event){
        event.preventDefault();
        this.photofilename=event.target.files[0].name;
        const formData = new FormData();
        formData.append(
            "myFile",
            event.target.files[0],
            event.target.files[0].name
        );
        fetch(process.env.REACT_APP_API+'Student/SaveFile',{
            method:'POST',
            body:formData
        })
        .then(res=>res.json())
        .then((result)=>{
            this.imagesrc=process.env.REACT_APP_PHOTOPATH+result;
            console.log(this.imagesrc)
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

                                <Form.Group controlId="StudentName">
                                    <Form.Label>StudentName</Form.Label>
                                    <Form.Control type="text" name="StudentName" required 
                                    defaultValue={this.props.studname}
                                    placeholder="StudentName"/>
                                </Form.Group>


                                <Form.Group controlId="Department">
                                    <Form.Label>Department</Form.Label>
                                    <Form.Control as="select" defaultValue={this.props.depmt}>
                                    {this.state.deps.map(dep=>
                                        <option key={dep.DepartmentId}>{dep.DepartmentName}</option>)}
                                    </Form.Control>
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
                            <Col sm={6}>
                                <Image width="200px" height="200px" 
                                src={process.env.REACT_APP_PHOTOPATH+this.props.photofilename} />
                                <input onChange={this.handleFileSelected} type="File"/>
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