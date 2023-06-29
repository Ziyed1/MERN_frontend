import React, { useState, useEffect } from "react";
import Ballon from '../assets/Ballon.jpg';
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

const Home = () => {
    const [notification, setNotification] = useState(null);
    const [selectedCategory, setSelectedCategory] = useState(null);
    const [products, setProducts] = useState([]);

    const categories = ['football', 'Natation', 'Tennis'];

    useEffect(() => {
        const fetchProducts = async () => {
          try {
            const response = await fetch('http://localhost:3001');
            const json = await response.json();
            setProducts(json);
          } catch (error) {
            console.log('Une erreur s\'est produite lors de la récupération des données :', error);
          }
        };
      
        fetchProducts();
      }, []);
      
      
    

    function saveProducts(produits) {
        localStorage.setItem("produits", JSON.stringify(produits));
    }

    const addProducts = (product) => {
        const foundProduct = products.find(p => p.id === product.id);
        if (foundProduct) {
            foundProduct.quantity++;
        } else {
            product.quantity = 1;
            products.push(product);
        }
        saveProducts(products);

        setNotification("Produit ajouté au panier");
        setTimeout(() => {
            setNotification(null);
        }, 3000);
    };

    const filtrerProduits = (category) => {
        setSelectedCategory(category);
    };

    const productsToShow = selectedCategory
        ? products.filter(product => product.sport === selectedCategory)
        : products;

    return (
        <div className="Home">
            <h2 className="title-margin">Nos Produits</h2>
            <div className="categories">
                <h3>Catégories :</h3>
                <ul>
                    {categories.map(category => (
                        <li key={category} onClick={() => filtrerProduits(category)}>{category}</li>
                    ))}
                </ul>
            </div>
            <Row>
                {productsToShow.map((product) => (
                    <Col md={3} key={product.id}>
                        <div className="d-flex justify-content-center">
                            <Card className="mycard2" style={{ maxWidth: "18rem" }}>
                                <Card.Img variant="top" src={Ballon} />
                                <Card.Body>
                                    <Card.Title>{product.title}</Card.Title>
                                    <Card.Text>
                                        {product.prix} €
                                    </Card.Text>
                                    <Card.Text>
                                        {product.description}
                                    </Card.Text>
                                    <Card.Text>
                                        Catégorie : {product.sport}
                                    </Card.Text>
                                    <Button
                                        variant="primary"
                                        onClick={() => addProducts(product)}
                                    >Ajouter au panier</Button>
                                </Card.Body>
                            </Card>
                        </div>
                    </Col>
                ))}
            </Row>
            {/* Notification */}
            <div className={`notification ${notification ? 'show' : ''}`}>
                Produit ajouté au panier !
            </div>
        </div>
    );
};

export default Home;
