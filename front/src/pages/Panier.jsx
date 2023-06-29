import React, { useEffect, useState } from "react";

const Panier = () => {
    const [products, setProducts] = useState([]);
    const [notification, setNotification] = useState(null);
    
  
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

    const validateProduct = () => {
      // Récapitulatif de la commande
      const recapitulatif = products.map((product) => ({
        nom: product.nom,
        prix: product.prix,
        quantite: product.quantity,
        total: product.prix * product.quantity,
      }));
    
      // Supprimer l'affichage des produits
      setProducts([]);
    
      // Afficher le récapitulatif de la commande
      setNotification("Commande validée !");
      setTimeout(() => {
        setNotification(null);
        // Effectuer une action supplémentaire après avoir validé la commande, par exemple rediriger l'utilisateur vers une autre page
      }, 3000);
    
      // Autres actions liées à la validation de la commande, par exemple envoyer les détails de la commande au serveur, etc.
    
      // Utilisez "recapitulatif" pour afficher les détails de la commande, par exemple :
      console.log("Récapitulatif de la commande :", recapitulatif);
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
              {product.title} - {product.prix} € (Quantité: {product.quantity})
              <button onClick={deleteProduct}>Supprimer</button>
            </li>
          ))}
        </ul>
        <h3>Prix Total : {totalPrice} € </h3> 
        <button className='ValiderPanier' onClick={validateProduct}>Valider le Panier</button>
        {/* Notification */}
        <div className={`notificationDelete ${notification ? 'show' : ''}`}>
                Produit supprimé du panier !
        </div>
    </div>
    );
  };

export default Panier;
