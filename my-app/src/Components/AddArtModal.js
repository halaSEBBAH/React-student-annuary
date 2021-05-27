import React,{Component} from 'react';
import {Modal,Button, Row, Col, Form} from 'react-bootstrap';

export class AddArtModal extends Component{
    constructor(props){
        super(props);
        this.handleSubmit=this.handleSubmit.bind(this);
    }

    handleSubmit(event){
        event.preventDefault();
        fetch(process.env.REACT_APP_API+'article/',{
            method:'POST',
            headers:{
                'Accept':'application/json',
                'Content-Type':'application/json'
            },
            body:JSON.stringify({
                ArticleId:null, 
                ArticleTitle:event.target.ArticleTitle.value,
                ArticleContent:event.target.ArticleContent.value
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

                <Modal  {...this.props} size="lg" aria-labelledby="contained-modal-title-vcenter" centered >
                    <Modal.Header clooseButton>
                        <Modal.Title id="contained-modal-title-vcenter">
                            Add Article
                        </Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Row>
                            <Col >
                                <Form onSubmit={this.handleSubmit}>
                                    <Form.Group controlId="ArticleTitle">
                                        <Form.Label>Article Title</Form.Label>
                                        <Form.Control type="text" name="ArticleTitle" required/>
                                    </Form.Group>

                                    <Form.Group controlId="ArticleContent">
                                        <Form.Label>Article Content</Form.Label>
                                        <Form.Control as="textarea" rows={5} name="ArticleContent" required/>
                                    </Form.Group>


                                    <Form.Group>
                                        <Button variant="primary" type="submit">
                                            Add Article
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









