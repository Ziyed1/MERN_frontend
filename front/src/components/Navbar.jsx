import React, { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useNavigate } from 'react-router-dom';

function NavBar() {

  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userName, setUserName] = useState('');

  const tokenData = localStorage.getItem('token');
  const nameData = localStorage.getItem('firstName');
  const adminData = localStorage.getItem('isAdmin');


  const navigate = useNavigate()


    useEffect(()=> {
      if(tokenData) {
        setIsLoggedIn(true);
        setUserName(nameData);
        if(adminData === 'true'){
          setIsAdmin(true);
        }
      }
    })
  
  const handleLogOut = () => {
    if(tokenData) {
      setIsLoggedIn(false);
      setUserName('');
      localStorage.clear()
      window.location.reload();
      navigate('/home')
    } else {
      setIsLoggedIn(true);
      setUserName(nameData);
    }
  };

  return (
    <Navbar expand="lg" className="navbar-dark bg-dark">
      <Container fluid>
        <Navbar.Brand href="home">Ligue sportive d'Auvergne</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="me-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="home">Accueil</Nav.Link>
            {!isLoggedIn ? (
              <Nav.Link href="/login">Se connecter</Nav.Link>
            ) : (
              <NavDropdown title={nameData} id="navbarScrollingDropdown">
                <NavDropdown.Item onClick={handleLogOut}>Déconnexion</NavDropdown.Item>
              </NavDropdown>
            )}
            <Nav.Link href="panier">Panier</Nav.Link>
            {isLoggedIn && isAdmin && (
            <NavDropdown title="Admin" id="navbarScrollingDropdown">
              <NavDropdown.Item href="AdminProduit">Gérer les produits</NavDropdown.Item>
              <NavDropdown.Item href="AdminUsers">Gérer les utilisateurs</NavDropdown.Item>
            </NavDropdown>
          )}
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Crampons, ballon..."
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Rechercher</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;