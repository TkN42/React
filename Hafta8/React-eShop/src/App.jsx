import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import { ShopContextProvider } from './context/ShopContext';

function App() {

  return (
    <div className="app-container">
      <ShopContextProvider>
        <Router>
          <Header />
          <Routes>
            <Route path='/e-commerce-react/' element={<Shop />}/>
            <Route path='/e-commerce-react/cart' element={<Cart />}/>
          </Routes>
        </Router>
        <Footer />
      </ShopContextProvider>
    </div>
  )
}

export default App
