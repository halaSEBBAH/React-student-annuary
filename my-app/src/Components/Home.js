
import React , {Component} from 'react';
import {Badge} from 'react-bootstrap';


export class Home extends Component{

    constructor(props){
        super(props);
        this.state={articles:[]} 
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'home')
        .then(response=>response.json()) 
        .then(data=>{ 
            this.setState({articles:data});
            console.log(this.state.articles)
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
        let {articles } =  this.state;
 
        
        return(
            <div> 
                <Badge variant="info">New</Badge>
                {articles.map(article => (<div>{article.ArticleContent}</div>))} 
            </div>
        );
    }

}