import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Navbar from "./components/Navbar";
import { useState } from "react";
import Header from "./components/Header";
import Home from "./pages/Home";
import Product from "./pages/Products";
import Cart from "./pages/Cart";

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const handleLogin = () => {
    setIsLoggedIn(true);
  };

  return (
    <div className="App">
      <BrowserRouter>
        {isLoggedIn && <Header />}
        {isLoggedIn && <Navbar />}
        <Routes>
          <Route
            path="/"
            element={isLoggedIn ? <Home /> : <Navigate to="/login" replace />}
          />
          <Route
            path="/login"
            element={
              isLoggedIn ? (
                <Navigate to="/" replace />
              ) : (
                <Login onLogin={handleLogin} />
              )
            }
          />
          <Route
            path="/products"
            element={isLoggedIn ? <Product /> : <Navigate to="/login" replace />}
          />
           <Route
            path="/cart"
            element={isLoggedIn ? <Cart /> : <Navigate to="/login" replace />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
