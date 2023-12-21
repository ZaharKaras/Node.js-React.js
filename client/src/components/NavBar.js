import React, { useContext } from "react";
import { Context } from "..";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { NavLink } from "react-router-dom";
import Agency from "../pages/Agency";
import { ADMIN_ROUTE, AGENCY_ROUTE, LOGIN_ROUTE } from "../utils/consts";
import {observer} from 'mobx-react-lite'
import Container from 'react-bootstrap/Container'
import { useNavigate } from "react-router-dom";


const NavBar = observer(() => {
    const {user} = useContext(Context)
    const navigate = useNavigate()

    console.log(user.user)

    const logOut = () => {
        user.setUser({})
        user.setIsAuth(false)
        navigate(AGENCY_ROUTE)
        console.log('logaut is run')
    }

    console.log(user.isAuth)

    return (
        <Navbar bg="dark" data-bs-theme="dark" style={{padding: '10px'}}>
            <Container>
            <NavLink to={AGENCY_ROUTE}>Travel Agency</NavLink>
            {user.isAuth ? 
                <Nav className="ml-auto" style={{padding: '10px'}}>
                    <Button variant={'outline-light'} onClick={() => navigate(ADMIN_ROUTE)}>Admin</Button>
                    <Button variant={'outline-light'} onClick={() => logOut()} >Exit</Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{padding: '10px'}}>
                    <Button variant={'outline-light'} onClick={() => navigate(LOGIN_ROUTE)}>Auth</Button>
                </Nav>
            }
            </Container>
            
        </Navbar>
      
    );
})

export default NavBar;