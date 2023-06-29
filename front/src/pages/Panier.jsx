import React, { useEffect, useState } from "react";

const Panier = () => {
    const [products, setProducts] = useState([]);
    const [notification, setNotification] = useState(null);
    
  
    useEffect(() => {
      let Products = localStorage.getItem("produits");
      if (Products) {
        setProducts(JSON.parse(Products)); 
      }
    }, []);
  

    const deleteProduct = () => {
      let Products = JSON.parse(localStorage.getItem("produits"));
      if (Products && Products.length > 0) {
        Products.pop()
        localStorage.setItem("produits", JSON.stringify(Products))
        setProducts(Products)

      setNotification("Produit supprimé du panier");
        setTimeout(() => {
            setNotification(null);
          }, 3000);
        }
    };

    // Calcul du prix total des produits
    const totalPrice = products.reduce(
      (accumulator, product) => accumulator + product.prix * product.quantity,
      0
    );
  
    return (
      <div className="panier">
        <h2>Votre Panier</h2>
        <h3>Produits ajoutés :</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.nom} - {product.prix} € (Quantité: {product.quantity})
              <button onClick={deleteProduct}>Supprimer</button>
            </li>
          ))}
        </ul>
        <h3>Prix Total : {totalPrice} € </h3>
        {/* Notification */}
        <div className={`notificationDelete ${notification ? 'show' : ''}`}>
                Produit supprimé du panier !
            </div>
      </div>
    );
  };

export default Panier;
