import React, { Component } from 'react'
import {Container, Row, Col, Form, FormGroup, Label, Input, FormText, Button, Card, CardText, CardBody,
    CardTitle, CardSubtitle  } from 'reactstrap';
import { Redirect } from 'react-router-dom'; 
import api from './Api';  
//import './../custom.css';

export default class Login extends Component {
    constructor(props)
    {
       
        super(props);
           
        this.state = {  
            redirect: false,
        } 
        this.authenticate = this.authenticate.bind(this);
    }
    componentDidMount(){  
         api.loadAdmin(this.props.match.params.id)
        .then((res)=>{ 
           console.log(res)
        });
    }
    authenticate(){
       console.log("ola");
    }
    render() {
        return (
            <div> 
                <Container> 
                    <Row>
                        <Col sm="12" md={{ size: 6, offset: 3 }}>
                        <Card>
                            <CardBody>
                                <CardTitle>Administrador</CardTitle> 
                                <Form>
                                    <FormGroup>
                                        <Label for="exampleEmail">E-mail</Label>
                                        <Input type="email" name="email" id="exampleEmail" placeholder="E-mail" />
                                    </FormGroup>
                                    <FormGroup>
                                        <Label for="examplePassword">Senha:</Label>
                                        <Input type="password" name="password" id="examplePassword" placeholder="Senha" />
                                    </FormGroup> 
                                    <Button color="success"  onClick={this.authenticate}>Enviar</Button>
                                </Form>
                            </CardBody>
                        </Card>
                        </Col>
                    </Row>
                </Container>
            </div>  
        );
    }
}
