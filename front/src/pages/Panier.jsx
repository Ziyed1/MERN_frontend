import React, { useEffect, useState } from "react";

const Panier = () => {
    const [products, setProducts] = useState([]);
    const [notification, setNotification] = useState(null);
    
  
    useEffect(() => {
      const storedProduct = localStorage.getItem("cartItems");
      if (storedProduct) {
        const parsedProduct = JSON.parse(storedProduct);
        setProducts([parsedProduct]); 
      }
    }, []);
  
    // Fonction pour supprimer un produit du panier
    const removeProduct = () => {
      localStorage.removeItem("cartItems");
      setProducts([]);

      setNotification("Produit supprimé du panier");
        setTimeout(() => {
            setNotification(null);
          }, 3000);
    };

    // Calcul du prix total des produits
    const totalPrice = products.reduce(
      (accumulator, product) => accumulator + product.prix,
      0
    );
  
    return (
      <div className="panier">
        <h2>Votre Panier</h2>
  
        {/* Affichage des produits ajoutés */}
        <h3>Produits ajoutés :</h3>
        <ul>
          {products.map((product) => (
            <li key={product.id}>
              {product.nom} - {product.prix} €
              <button onClick={removeProduct}>Supprimer</button>
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
