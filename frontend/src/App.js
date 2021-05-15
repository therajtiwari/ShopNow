import React from "react";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import ProductScreen from "./screens/ProductScreen";
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
        <Container fluid className="text-center py-5" style={{ width: "80%" }}>
          <Route path="/" component={HomeScreen} exact />
          <Route path="/product/:id" component={ProductScreen} />
        </Container>
      </main>
      <Footer />
    </Router>
  );
};

export default App;
