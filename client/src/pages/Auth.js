import React from 'react'
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom';
import { LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';

const Auth = () => {
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    console.log(location)
    return (
        <Container
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'> {isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter password'
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter password'
                    />
                    <Row>
                        {isLogin ?
                            <NavLink to={REGISTRATION_ROUTE}>
                                Registrate
                            </NavLink>
                            :
                            <NavLink to={LOGIN_ROUTE}>
                                Login
                            </NavLink>
                        }
                        

                        <Button className='mt-3' variant='outline-success'>
                            {isLogin ? 'Enter' : 'Registrate'}
                        </Button>
                    </Row>
                    
                </Form>
            </Card>
        </Container>
    );
};

export default Auth;