import React, {useState, useEffect} from 'react'


export default function Profile() {
    const [user, setUser] = useState([]);

    const getId = localStorage.getItem('id');

    useEffect(() => {
        const fetchUser = async () => {
          try {
            const response = await fetch(`http://localhost:3001/admin/${getId}`);
            const json = await response.json();
            setUser(json);
            console.log(json)
          } catch (error) {
            console.log('Une erreur s\'est produite lors de la récupération des données :', error);
          }
        };
      
        fetchUser();
    }, []);


  return (
    <div>
    {user && (
      <div>
        <h3>Informations de l'utilisateur :</h3>
        <p>Email : {user.email}</p>
        <p>Prénom : {user.firstName}</p>
        <p>Nom : {user.lastName}</p>
        <p>Admin : {user.isAdmin ? 'Oui' : 'Non'}</p>
        <p>Téléphone : {user.phone}</p>
      </div>
    )}
  </div>
  )
}
