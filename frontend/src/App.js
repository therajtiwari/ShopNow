import React from "react";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
import LoginScreen from "./screens/LoginScreen";
import RegisterScreen from "./screens/RegisterScreen";
import ProfileScreen from "./screens/ProfileScreen";
import CartScreen from "./screens/CartScreen";
import ShippingScreen from "./screens/ShippingScreen";

import { Container } from "react-bootstrap";

//router
import { BrowserRouter as Router, Route } from "react-router-dom";

// custom css
import "./index.css";

const App = () => {
  return (
    <Router>
      <Header />
      <main>
        <Container fluid className="text-center py-5">
          <Route path="/login" component={LoginScreen} />
          <Route path="/register" component={RegisterScreen} />
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
          <Route path="/cart/:id?" component={CartScreen} />
          <Route path="/profile" component={ProfileScreen} />
          <Route path="/shipping" component={ShippingScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
