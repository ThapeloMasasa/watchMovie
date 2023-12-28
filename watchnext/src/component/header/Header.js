import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faUpRightAndDownLeftFromCenter, faVideoSlash} from "@fortawesome/free-solid-svg-icons";
import {Button} from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import {NavLink} from "react-router-dom";

const Header = () =>{
    return(
        <Navbar bg="dark" variant="dark" expand="lg">
            <Container fluid>
                <Navbar.brand href="/" style={{"color": 'gold'}}>
                    <FontAwesomeIcon  icon={faVideoSlash}/> Gold
                </Navbar.brand>
                <Navbar.Toggle aria-controls="navbarScroll" />
                <Navbar.Collapse id="navbarScroll">
                    <Nav
                        className="me-auto my-2 my-log-0"
                        style={{maxHeight: '100px'}}
                        navbarScroll
                    >
                        <NavLink className= "nav-link" to="/">
                            Home
                        </NavLink>
                        <NavLink className= "nav-link" to="/watchList">
                            Watch List
                        </NavLink>
                    </Nav>
                    <Button variant="outline-info" className="me-2">Login</Button>
                    <Button variant="outline-info" className="me-2">Register</Button>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}