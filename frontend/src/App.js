import React from "react";
// components
import Header from "./components/Header";
import Footer from "./components/Footer";
import HomeScreen from "./screens/HomeScreen";
import { Container } from "react-bootstrap";

// custom css
import "./index.css";
const App = () => {
  return (
    <>
      <Header />
      <main>
        <Container fluid className="text-center py-5" style={{ width: "80%" }}>
          <h1>Welcome to SmartShop</h1>
          <HomeScreen />
        </Container>
      </main>
      <Footer />
    </>
  );
};

export default App;
