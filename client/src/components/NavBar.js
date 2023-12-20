import React, { useContext } from "react";
import { Context } from "..";
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Button from 'react-bootstrap/Button'
import { NavLink } from "react-router-dom";
import Agency from "../pages/Agency";
import { AGENCY_ROUTE } from "../utils/consts";
import {observer} from 'mobx-react-lite'
import Container from 'react-bootstrap/Container'

const NavBar = observer(() => {
    const {user} = useContext(Context)
    return (
        <Navbar bg="dark" data-bs-theme="dark" style={{padding: '10px'}}>
            <Container>
            <NavLink to={AGENCY_ROUTE}>Travel Agency</NavLink>
            {user.isAuth ? 
                <Nav className="ml-auto" style={{padding: '10px'}}>
                    <Button variant={'outline-light'}>Admin</Button>
                    <Button variant={'outline-light'} onClick={() => user.setIsAuth(false)} >Exit</Button>
                </Nav>
                :
                <Nav className="ml-auto" style={{padding: '10px'}}>
                    <Button variant={'outline-light'} onClick={() => user.setIsAuth(true)}>Auth</Button>
                </Nav>
            }
            </Container>
            
        </Navbar>
      
    );
})

export default NavBar;