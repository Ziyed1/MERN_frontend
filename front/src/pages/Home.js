import React, { useState } from "react";
import Ballon from '../assets/Ballon.jpg'
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';


const Home = () => {

    return (
      <div className="Home">  
        <h2 className="title-margin">Nos Produits</h2>
        <Row> 
            <Col md={3}>
                <div className="d-flex justify-content-center">
                    <Card className="mycard2" style={{ maxWidth: "18rem" }}>
                        <Card.Img variant="top" src={Ballon} />
                        <Card.Body>
                            <Card.Title>Ballon de foot</Card.Title>
                            <Card.Text>
                                39 €
                            </Card.Text>
                            <Card.Text>
                                Ballon de foot de ligue 1 taille 5
                            </Card.Text>
                            <Button variant="primary">Ajouter au panier</Button>
                        </Card.Body>
                    </Card>
                </div>
            </Col>
        </Row> 
      </div>
    )
}

export default Home;