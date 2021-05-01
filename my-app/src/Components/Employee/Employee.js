import React , {Component} from 'react';

import {Table,Button,ButtonToolbar} from 'react-bootstrap';
import {AddStudModal} from './AddStudModal';
import {EditStudModal} from './EditStudModal';


export class Employee extends Component{

    constructor(props){
        super(props);
        this.state={studs:[], addModalShow:false, editModalShow:false} 
    }


    refreshList(){
        fetch(process.env.REACT_APP_API+'student')
        .then(response=>response.json()) 
        .then(data=>{
            this.setState({studs:data});
        });
    }

    componentDidMount(){
        this.refreshList();
    }

    componentDidUpdate(){
        this.refreshList();
    }

    render(){
         let {studs} =  this.state;
        return(
            <div> 

            <Table className="mt-4" striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>StudentId</th>
                    <th>StudentName</th>
                    <th>Department</th>
                    <th>DateOfJoining</th>
                    <th>PhotoFileName</th>
                </tr>
            </thead>
            <tbody>
                {studs.map(stu=>
                        <tr key={stu.StudentId}>
                        <td>{stu.StudentName}   </td>
                        <td>{stu.Department}    </td>
                        <td>{stu.DateOfJoining} </td>
                        <td>{stu.PhotoFileName} </td>
                        <td> Edit / Delete      </td>
                    </tr>
                )}
            </tbody>
                
            </Table>

            <ButtonToolbar>
                <Button variant='primary'
                onClick={()=>this.setState({addModalShow:true})}>
                Add Student</Button>

                <AddStudModal show={this.state.addModalShow}
                onHide={()=>this.setState({addModalShow:false})}/>
            </ButtonToolbar>

            
            
            </div>

        )
    }

    

}