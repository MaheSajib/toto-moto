import React from 'react';
import { Button, Form, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <div className="header">
            <Navbar expand="lg">
                <Navbar.Brand ><Link className="Logo" style={{ textDecoration: 'none' }} to="/home">TOTO-MOTO BD</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="">
                        <Nav.Link ><Link className="menu" style={{ textDecoration: 'none' }} to="/home">Home</Link></Nav.Link>
                        <Nav.Link ><Link className="menu" style={{ textDecoration: 'none' }} to="/ride/:name">Destination</Link></Nav.Link>
                        <Nav.Link ><Link className="menu" style={{ textDecoration: 'none' }} to="/home">Blog</Link></Nav.Link>
                        <Nav.Link ><Link className="menu" style={{ textDecoration: 'none' }} to="/home">Contact</Link></Nav.Link>
                    </Nav>
                    <Form inline>
                        <Button variant="outline-success">Login</Button>
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;