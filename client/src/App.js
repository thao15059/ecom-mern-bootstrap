import React from "react";
import { Container } from "react-bootstrap";

import Footer from "./components/Footer";
import Header from "./components/Header";
import HomePage from "./components/pages/HomePage";

function App() {
  return (
    <>
      <Header />

      <main className="py-3">
        <Container>
          <HomePage />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
