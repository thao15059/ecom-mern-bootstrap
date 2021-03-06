import React from "react";
import { Container } from "react-bootstrap";
import { Route } from "react-router-dom";

import Footer from "./components/Footer";
import Header from "./components/Header";
import CartPage from "./pages/CartPage";
import HomePage from "./pages/HomePage";
import LoginPage from "./pages/LoginPage";
import PaymentPage from "./pages/PaymentPage";
import PlaceOrderPage from "./pages/PlaceOrderPage";
import ProductPage from "./pages/ProductPage";
import ProfilePage from "./pages/ProfilePage";
import RegisterPage from "./pages/RegisterPage";
import ShippingPage from "./pages/ShippingPage";

function App() {
  return (
    <>
      <Header />

      <main className="py-3">
        <Route exact path="/" component={HomePage} />
        <Container>
          <Route path="/placeorder" component={PlaceOrderPage} />
          <Route path="/payment" component={PaymentPage} />
          <Route path="/shipping" component={ShippingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/profile" component={ProfilePage} />
          <Route path="/product/:id" component={ProductPage} />
          <Route path="/cart/:id?" component={CartPage} />
        </Container>
      </main>

      <Footer />
    </>
  );
}

export default App;
