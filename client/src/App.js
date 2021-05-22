import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./pages/HomePage";
import ProductPage from "./pages/ProductPage";

function App() {
  return (
    <>
      <Header />

      <main className="py-3">
        <Container>
          <Route exact path="/" component={HomePage} />
          <Route path="/product/:id" component={ProductPage} />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
