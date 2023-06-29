import React, { useState } from "react";
import Ballon from '../assets/Ballon.jpg';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
    const [notification, setNotification] = useState(null);

    function saveProducts(produits) {
        localStorage.setItem("produits", JSON.stringify(produits));
    }

    function getProducts() {
        const produits = localStorage.getItem("produits");
        return produits ? JSON.parse(produits) : [];
    }

    const addProducts = (product) => {
        const produits = getProducts();
        const foundProduct = produits.find(p => p.id === product.id);
        if (foundProduct) {
            foundProduct.quantity++;
        } else {
            product.quantity = 1;
            produits.push(product);
        }
        saveProducts(produits);

        setNotification("Produit ajouté au panier");
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

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
                                <Button
                                    variant="primary"
                                    onClick={() =>
                                        addProducts({
                                            id: 1,
                                            nom: "Ballon de foot",
                                            prix: 39,
                                            description: "Ballon de foot de ligue 1 taille 5"
                                        })
                                    }
                                >Ajouter au panier</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
                <Col md={3}>
                    <div className="d-flex justify-content-center">
                        <Card className="mycard2" style={{ maxWidth: "18rem" }}>
                            <Card.Img variant="top" src={Ballon} />
                            <Card.Body>
                                <Card.Title>BaseBall</Card.Title>
                                <Card.Text>
                                    59 €
                                </Card.Text>
                                <Card.Text>
                                    Baseball
                                </Card.Text>
                                <Button
                                    variant="primary"
                                    onClick={() =>
                                        addProducts({
                                            id: 2,
                                            nom: "BaseBall",
                                            prix: 59,
                                            description: "Baseball"
                                        })
                                    }
                                >Ajouter au panier</Button>
                            </Card.Body>
                        </Card>
                    </div>
                </Col>
            </Row>
            {/* Notification */}
            <div className={`notification ${notification ? 'show' : ''}`}>
                Produit ajouté au panier !
            </div>
        </div>
    );
};

export default Home;
