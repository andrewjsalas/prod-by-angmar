import React from 'react';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

function NavBar() {
    
    return (
        <Navbar className='nav-container bg-dark'>
            <Container>
                <Navbar.Brand
                    to='/'
                    className='nav-logo text-light'
                > HOME
                </Navbar.Brand>
            </Container>
        </Navbar>
    )
}

export default NavBar;