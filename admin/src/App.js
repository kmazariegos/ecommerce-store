import "./App.css";
import Home from "./pages/home/Home"; 
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  Navigate
} from "react-router-dom";
import UserList from "./pages/userList/UserList";
import User from "./pages/user/User";
import NewUser from "./pages/newUser/NewUser";
import ProductList from "./pages/productList/ProductList";
import Product from "./pages/product/Product";
import NewProduct from "./pages/newProduct/NewProduct";
import Login from "./pages/login/Login";
import { useSelector } from "react-redux";

function App() {
  const admin = useSelector((state) => state.user.currentUser.userName === 'karla');
  return (
    <div>
    <Router>
      <nav className='homeNav'>
        <Link to="/" className="links">Home</Link>
        <Link to="/login" className="links">Logout</Link>
        <Link to="/users" className="links">Users</Link>
        <Link to="/user/:userId" className="links">User</Link>
        <Link to="/newUser" className="links">NewUser</Link>
        <Link to="/products" className="links">Products</Link>
        <Link to="/newproduct" className="links">NewProduct</Link>
      </nav>
      <Routes>
      <Route path="/login" element={admin ? <Navigate to="/"/> : <Login/>}></Route>
            <Route exact path="/" element={<Home/>}></Route>
            <Route path="/users" element={<UserList/>}></Route>
            <Route path="/user/:userId" element={<User/>}></Route>
            <Route path="/newUser" element={<NewUser/>}></Route>
            <Route path="/products" element={<ProductList/>}></Route>
            <Route path="/product/:productId" element={<Product/>}></Route>
            <Route path="/newproduct" element={<NewProduct/>}></Route>
      </Routes>
    </Router>
  </div>
  );
}

export default App;
