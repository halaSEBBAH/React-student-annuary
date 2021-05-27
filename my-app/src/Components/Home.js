
import React , {Component} from 'react';
import {Badge, Container,Jumbotron, Button, ButtonToolbar} from 'react-bootstrap';
import {AddArtModal} from './AddArtModal';


export class Home extends Component{

    constructor(props){
        super(props);
        this.state={articles:[],addModalShow:false} 
    }

    refreshList(){
        fetch(process.env.REACT_APP_API+'article')
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

   


    render(){
        let {articles } =  this.state;
 
        return(
            <div> 
                <Badge variant="info">New</Badge>
                
                    
                {articles.reverse().map(article => ( 
                    <Jumbotron fluid>
                        <Container>
                            <h1> {article.ArticleTitle}</h1>
                            <p>
                                {article.ArticleContent}
                            </p>
                        </Container>
                    </Jumbotron>
                ))} 
                    

                <ButtonToolbar>
                    <Button variant='primary' onClick={()=>this.setState({addModalShow:true})}>
                        Add Article
                    </Button>

                    <AddArtModal show={this.state.addModalShow} onHide={()=>this.setState({addModalShow:false})}/>
                </ButtonToolbar>
               
            </div>
        );
    }
}