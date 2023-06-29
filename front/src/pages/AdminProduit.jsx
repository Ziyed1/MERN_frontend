import { useState, useEffect } from "react"

const AdminProduit = () => {

    const [id, setId] = useState('')
    const [titre, setTitre] = useState('')
    const [image, setImage] = useState('')
    const [quantité, setQuantité] = useState('')
    const [prix, setPrix] = useState('')
    const [description, setDescription] = useState('')
    const [sport, setSport] = useState('')
    const [taille, setTaille] = useState('')

    useEffect(() => {
      const fetchProduits = async () => {
        const response = await fetch("http://localhost:3001");
        const jsonData = await response.json();

      };
  
      fetchProduits();
    }, []);

    const handleSubmit = async (e) => {

        const produit = {titre, image, description, taille, prix, quantité, sport}

        const response = await fetch('http://localhost:3001/AdminProduit', {
            method: 'POST',
            body: JSON.stringify(produit),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        const json = await response.json()

        if (!response.ok) {
            console.log('Erreur de transmission des données')

        } else {
            setTitre('')
            setQuantité('')
            setPrix('')
            setDescription('')
            setSport('')
            console.log('Produit ajouté ! ', json)
        }
    } 

    return (
        <form className="create" onSubmit={handleSubmit}>
           <h3>Ajouter un nouveau produit</h3>

            <label>Titre</label>
            <input 
              type="text"
              onChange={(e) => setTitre(e.target.value)}
              value={titre}
            />

            <label>Image</label>
            <input 
              type="text"
              onChange={(e) => setImage(e.target.value)}
              value={image}
            />

            <label>Description</label>
            <input 
              type="text"
              onChange={(e) => setDescription(e.target.value)}
              value={description}
            />

            <label>Taille</label>
            <input 
              type="text"
              onChange={(e) => setTaille(e.target.value)}
              value={taille}
            />

            <label>Prix</label>
            <input 
              type="number"
              onChange={(e) => setPrix(e.target.value)}
              value={prix}
            />

            <label>Quantité</label>
            <input 
              type="number"
              onChange={(e) => setQuantité(e.target.value)}
              value={quantité}
            />

            <label>Sport</label>
            <input 
              type="text"
              onChange={(e) => setSport(e.target.value)}
              value={sport}
            />

            <button>Ajouter un produit</button>

        </form>
    )
}

export default AdminProduit