import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import DevCard from "./devCard";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
      {/* <DevCard /> */}
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1> Fast React Pizza Co.</h1>
    </header>
  );
}

function Footer() {
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  return (
    <footer className="footer">
      {hour >= openHour && hour < closeHour
        ? `We're Open Until ${closeHour}:00`
        : `We're Closed, Opening back at ${openHour}:00`}
    </footer>
  );
}

function Menu() {
  return (
    <div className="menu">
      <h2>Our Menu:</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredient="Tomato, mozarella, spinach, and ricotta cheese"
        image="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredient="Tomato, onion and mushrooms"
        image="pizzas/funghi.jpg"
        price={12}
      />
      <Pizza />
    </div>
  );
}

function Pizza({
  name = "Pizza Invisibile",
  ingredient = "*nothing at all*",
  image,
  price = 0,
}) {
  return (
    <div className="pizza">
      <img src={image} alt="*Image Missing*" />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>${price}</span>
      </div>
    </div>
  );
}

// React >= v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
