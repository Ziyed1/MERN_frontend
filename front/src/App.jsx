import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Connexion from './pages/Connexion'
import Inscription from './pages/Inscription'
import Panier from './pages/Panier'
import AdminProduit from './pages/AdminProduit'
import AdminUsers from './pages/AdminUsers'

function App() {
  return (
    <div className="App">
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path='/home'
              element={<Home />}
            />
            <Route
              path='/login'
              element={<Connexion />}
            />
            <Route
              path='/Inscription'
              element={<Inscription />}
            />
            <Route
              path='/panier'
              element={<Panier />}
            />
            <Route
              path='/AdminProduit'
              element={<AdminProduit />}
            />
             <Route
              path='/AdminProduit'
              element={<AdminProduit />}
            />
             <Route
              path='/adminUsers'
              element={<AdminUsers />}
            />
          </Routes>
        </div>
    </div>
  );
}

export default App;
