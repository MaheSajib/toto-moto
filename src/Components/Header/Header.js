import { useContext } from 'react';
import { Button, Form, Nav, Navbar} from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { UserContext } from '../../App';
import './Header.css';

const Header = () => {
    const [loggedInUser, setLoggedInUser] = useContext(UserContext);
    console.log(loggedInUser);
    return (
        <div className="header">
            <Navbar expand="lg">
                <Navbar.Brand ><Link className="Logo" style={{ textDecoration: 'none' }} to="/home">TOTO-MOTO BD</Link></Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse className="justify-content-end" id="basic-navbar-nav">
                    <Nav className="">
                        <Nav.Link ><Link className="menu" style={{ textDecoration: 'none' }} to="/home">Home</Link></Nav.Link>
                        <Nav.Link disabled><Link className="menu" style={{ textDecoration: 'none' }} to="/ride/:name">Destination</Link></Nav.Link>
                        <Nav.Link disabled ><Link className="menu" style={{ textDecoration: 'none' }} to="/home">Blog</Link></Nav.Link>
                        <Nav.Link disabled ><Link className="menu" style={{ textDecoration: 'none' }} to="/home">Contact</Link></Nav.Link>
                    </Nav>
                    <Form inline>
                        {
                          loggedInUser.success ? <Button variant="btn btn-danger">Log Out</Button> 
                          : <Button variant="outline-success">LogIn</Button>
                        }
                    </Form>
                </Navbar.Collapse>
            </Navbar>
        </div>
    );
};

export default Header;