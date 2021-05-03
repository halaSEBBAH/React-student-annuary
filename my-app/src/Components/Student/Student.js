import React , {Component} from 'react';

import {Table,Button,ButtonToolbar} from 'react-bootstrap';
import {AddStudModal} from './AddStudModal';
import {EditStudModal} from './EditStudModal';


export class Student extends Component{

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

    deleteStud(studid){
        if(window.confirm('Are you sure?')){
            fetch(process.env.REACT_APP_API+'student/'+studid,{
                method:'DELETE',
                header:{'Accept':'application/json',
                        'Content-Type':'application/json' } 
            })
        }
    }


    render(){
        let {studs, studid, studname, depart, dateOfJoin } =  this.state;
 
        
        return(
            <div> 

            <Table className="mt-4" striped bordered hover size="sm">
            <thead>
                <tr>
                    <th>StudentName</th>
                    <th>Department</th>
                    <th>DateOfJoining</th>
                    <th>PhotoFileName</th>
                </tr>
            </thead>

            <tbody>
                {studs.map(stu=>
                        <tr key={stu.StudentId}>
                            <td>{stu.StudentName}    </td>
                            <td>{stu.Department}     </td>
                            <td>{stu.DateOfJoining}  </td>
                            <td>{stu.PhotoFileName}  </td>
                            <td>
                                <ButtonToolbar>
                                    <Button className="mr-2" variant="danger"
                                        onClick={()=>this.setState({
                                            editModalShow:true,
                                            studid :stu.StudentId,
                                            studname :  stu.StudentName,
                                            depart : stu.Department,
                                            dateOfJoin : stu.DateOfJoining,
                                    })} >
                                        Edit
                                    </Button>

                                    <EditStudModal show={this.state.editModalShow}
                                        onHide={()=>{this.setState({editModalShow:false})}} 
                                        studid = {studid} 
                                        studname = {studname} 
                                        depart = {depart} 
                                        dateOfJoin = {dateOfJoin} />

                                    <Button className="mr-2" variant="danger"
                                        onClick={()=>this.deleteStud(stu.StudentId)}>
                                        Delete 
                                    </Button>  

                                </ButtonToolbar>
                            </td>
                        </tr>
                )}
            </tbody> 
                
            </Table>

            <ButtonToolbar>
                <Button variant='primary' onClick={()=>this.setState({addModalShow:true})} >
                    Add Student
                </Button>

                <AddStudModal show={this.state.addModalShow} onHide={()=>this.setState({addModalShow:false})} /> 
            </ButtonToolbar> 
            
                    
            </div>

        )
    }

    

}