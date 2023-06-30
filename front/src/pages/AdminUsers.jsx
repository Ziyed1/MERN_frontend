import React, {useState, useEffect} from 'react'

export default function AdminUsers() {

    const [selectedCategory, setSelectedCategory] = useState(null);
    const [users, setUsers] = useState([]);

    useEffect(() => {
        const fetchUsers = async () => {
          try {
            const response = await fetch('http://localhost:3001/admin');
            const json = await response.json();
            setUsers(json);
          } catch (error) {
            console.log('Une erreur s\'est produite lors de la récupération des données :', error);
          }
        };
      
        fetchUsers();
    }, []);

    console.log(users)

    return (
      <div>
        <h3>Utilisateurs :</h3>
        {Object.entries(users).map(([userId, user]) => (
          <div key={userId}>
            <p>Nom : {user}</p>
            <p>Prénom : {user}</p>
          </div>
        ))}
      </div>
    );
      
}
