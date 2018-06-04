import React, { Component } from 'react'
import { Alert, Container, Row, Col, Table,Progress, Button, ButtonGroup} from 'reactstrap';
import { Link } from 'react-router-dom';
import { Redirect } from 'react-router-dom';
import api from './Api';
import swal from 'sweetalert';
 
 
export default class TableUser extends Component {
    constructor(props){
        super(props);
        this.deleteContact = this.deleteContact.bind(this); 
        this.state = {
          users: [], 
          isLoading: false,
          redirect: false,
        }  
      } 
    
      componentDidMount(){
        this.setState({ isLoading: true});
        api.loadUser().then((res)=> 
        this.setState({ 
            isLoading: false,
            users: res.data
        })
        );
    }
    showUsers = (users) => {
        console.log(users)
        
            return(
                <tr> 
                    <td>{users.nome}</td>
                    <td>{users.email}</td>
                    <td>{users.telefone}</td> 
                    <td>{users.parentesco}</td>
                    <td>  
                        <ButtonGroup>
                            <Link className='btn btn-primary' to={`/edit/${users.id}`}>Editar</Link>
                            <Button color="danger" onClick={()=>this.deleteContact(users.id)}>Apagar</Button> 
                        </ButtonGroup>
                    </td>
                </tr>
                ); 
    }
    deleteContact = (id) => {
        api.deleteUser(id).then((res)=>{
            swal("Apagado com sucesso", "", "success").then(()=>{
                this.setState({
                    redirect: '/', 
                });
            });
        })
    }
     
    render() {
        return (
            <div>
                { 
                    this.state.redirect && 
                    window.location.reload()
                }
                <Container> 
                    <Row>
                        <Col sm="12" md={{ size: 10, offset: 1 }}>
                            <Alert color="primary" style={{marginTop: '2%',}}>
                                Seja bem-vindo João Pedro
                            </Alert>
                            <Table striped>
                                <thead>
                                    <tr> 
                                        <th>Nome</th>
                                        <th>E-mail</th>
                                        <th>Telefone</th>
                                        <th>Parentesco</th>  
                                        <th>Ação</th>
                                        
                                    </tr>
                                </thead>
                                <tbody>
                                    { 
                                        this.state.isLoading &&  
                                        <h4 className='text-center'>Aguarde....</h4>
                                    }
                                    {
                                        !this.state.isLoading &&
                                        this.state.users.map(this.showUsers)
                                    } 
                                </tbody>
                            </Table>
                        </Col>
                    </Row>  
            </Container>
         </div>
        )
    }
}