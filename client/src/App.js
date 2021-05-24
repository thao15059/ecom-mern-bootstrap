import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Header />

      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
