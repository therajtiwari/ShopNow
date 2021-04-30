import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Container } from "react-bootstrap";

// custom css
import "./index.css";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container className="text-center py-5">
          <h1>Welcome to SmartShop</h1>
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
