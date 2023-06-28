import { BrowserRouter, Routes, Route } from 'react-router-dom'

import Navbar from './components/Navbar'
import Home from './pages/Home'
import Connexion from './pages/Connexion'
import Inscription from './pages/Inscription'

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar />
        <div className='pages'>
          <Routes>
            <Route
              path='/Home'
              element={<Home />}
            />
            <Route
              path='/Connexion'
              element={<Connexion />}
            />
            <Route
              path='/Inscription'
              element={<Inscription />}
            />
          </Routes>
        </div>
      </BrowserRouter>
    </div>
  );
}

export default App;
