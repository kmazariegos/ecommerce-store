import './App.css';
import Home from "./Pages/Home/Home" 
import Cart from './Pages/Cart/Cart';
import Login from './Pages/Login/Login';
import Product from './Pages/Product/Product';
import Success from './Pages/Success'
import ProductList from './Pages/ProductList/ProductList';
import Register from './Pages/Register/Register';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import { useSelector } from "react-redux";


function App() {
  const user = useSelector((state) => state.user.currentUser);
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route exact path="/" element={<Home/>}></Route>
        <Route path="/products/:category" element={<ProductList />}></Route>
        <Route path="/product/:id" element={<Product />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/success" element={<Success />}></Route>
        <Route path="/login" element={user ? <Login/> : <Home />}></Route>
        <Route path="/register" element={user ? <Register/> : <Home />}></Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
