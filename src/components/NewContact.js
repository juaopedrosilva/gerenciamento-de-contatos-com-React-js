import React, { Component } from 'react'
import {Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button, Progress } from 'reactstrap';
import { Redirect } from 'react-router-dom';
import Menu from './Menu';
import api from './Api';
import swal from 'sweetalert';
 

export default class NewContact extends Component {
    constructor(props)
    {
        super(props);
        this.state = {  
            redirect: false,
            parentesco: [],  
        } 
        this.saveContact = this.saveContact.bind(this);
    }
    componentDidMount(){
        api.loadParestesco().then((res)=>{
            console.log(res);
            this.setState({
                parentesco: res.data
            });
        }); 
    }

    saveContact(){ 
        const newContact = {
            id: this.props.match.params.id,
            nome: this.refs.nome.value,
            email: this.refs.email.value,
            telefone: this.refs.telefone.value,
            parentesco: this.refs.grau.value
        }  
        if (newContact.nome && newContact.email && newContact.telefone   && newContact.parentesco){
            api.sendUser(newContact).then((res)=>{
                swal("Contato cadastrado com sucessp", {
                    buttons: false,
                    timer: 3000,
                    icon: "success",
                });
                this.setState({
                    redirect: '/' 
                });
            });
            return;
        } 
        swal("Informe todos os dados", "", "error");
    } 
    render() {
        return (
            <div>
                { 
                    this.state.redirect && 
                    <Redirect to={this.state.redirect} />
                }
                <Menu/>
                <Container> 
                    <Row>
                        <Col sm="12" md={{ size: 8, offset: 2 }}>
                            <br/>
                            <Form> 
                                <FormGroup>
                                    <Label for="nome">Nome</Label>
                                    <input type="text" ref="nome" id="" className='form-control' placeholder="Nome" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="email">E-mail</Label>
                                    <input type="email" ref="email" className='form-control' id="" placeholder="E-mail" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="telefone">Telefone</Label>
                                    <input type="tel" className='form-control' ref="telefone" id="" placeholder="Telefone" />
                                </FormGroup>
                                <FormGroup>
                                    <Label for="exampleSelect">Grau de Parentesco</Label>
                                    <select ref="grau" className='form-control' id="exampleSelect"> 
                                    <option value="">Informe o parentesco</option>
                                    {
                                        this.state.parentesco.map((parentesco) =>
                                        <option value={parentesco} >{parentesco}</option>  )
                                    }
                                    </select>
 
                                </FormGroup>
                                <FormGroup>
                                    <Button color="success" onClick={this.saveContact}>Enviar</Button>
                                </FormGroup>
                            </Form>
                        </Col>
                    </Row>
                </Container>
            </div>  
        );
    }
}
