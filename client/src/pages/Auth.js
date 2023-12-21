import React, {useContext, useState} from 'react';
import { Button, Card, Container, Form, Row } from 'react-bootstrap'
import { NavLink, useLocation } from 'react-router-dom';
import { AGENCY_ROUTE, LOGIN_ROUTE, REGISTRATION_ROUTE } from '../utils/consts';
import { registration, login } from '../http/userAPI';
import {Context} from "../index";
import { useNavigate } from "react-router-dom";
import { observer } from 'mobx-react-lite';



const Auth = observer(() => {
    const {user} = useContext(Context)
    const location = useLocation()
    const isLogin = location.pathname === LOGIN_ROUTE
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const navigate = useNavigate()
    console.log(isLogin)

    const click = async () => {
        try {
            let data;

            if (isLogin) {
                data = await login(email, password);
            } else {
                data = await registration(email, password);
            }

            user.setUser(user)
            user.setIsAuth(true)
            navigate(AGENCY_ROUTE)
        } catch (e) {
            alert(e.response.data.message)
        }
    }

    return (
        <Container
        className='d-flex justify-content-center align-items-center'
        style={{height: window.innerHeight - 54}}>
            <Card style={{width: 600}} className='p-5'>
                <h2 className='m-auto'> {isLogin ? 'Authorization' : 'Registration'}</h2>
                <Form className='d-flex flex-column'>
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter email'
                        value={email}
                        onChange={e => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className='mt-3'
                        placeholder='Enter password'
                        value={password}
                        onChange={e => setPassword(e.target.value)}
                        type="password"
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
                        

                        <Button className='mt-3' variant='outline-success'
                            onClick={click}>
                            {isLogin ? 'Enter' : 'Registrate'}
                        </Button>
                    </Row>
                    
                </Form>
            </Card>
        </Container>
    );
});

export default Auth;