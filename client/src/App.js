import './App.css';
import Home from "./Pages/Home/Home"
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import Product from './Pages/Product/Product';
import ProductList from './Pages/ProductList/ProductList';
import Register from './Pages/Register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";


function App() {
  const user = true;
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/login" element={user ? <Login/> : <Home />}></Route>
        <Route path="/register" element={user ? <Register/> : <Home />}></Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
