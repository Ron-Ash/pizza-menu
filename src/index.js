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
      <DevCard />
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
  const openHour = 8;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour < closeHour;
  return (
    <footer className="footer">
      {isOpen ? (
        <div className="order">
          <p>
            We're Open Until {closeHour}:00. Come visit use or order online!
          </p>
          <button className="btn">Order</button>
        </div>
      ) : (
        `We're Closed, Opening back at ${openHour}:00`
      )}
    </footer>
  );
}

function Menu() {
  const pizzaData = [
    {
      name: "Focaccia",
      ingredients: "Bread with italian olive oil and rosemary",
      price: 6,
      photoName: "pizzas/focaccia.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Margherita",
      ingredients: "Tomato and mozarella",
      price: 10,
      photoName: "pizzas/margherita.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Spinaci",
      ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
      price: 12,
      photoName: "pizzas/spinaci.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Funghi",
      ingredients: "Tomato, mozarella, mushrooms, and onion",
      price: 12,
      photoName: "pizzas/funghi.jpg",
      soldOut: false,
    },
    {
      name: "Pizza Salamino",
      ingredients: "Tomato, mozarella, and pepperoni",
      price: 15,
      photoName: "pizzas/salamino.jpg",
      soldOut: true,
    },
    {
      name: "Pizza Prosciutto",
      ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
      price: 18,
      photoName: "pizzas/prosciutto.jpg",
      soldOut: false,
    },
  ];

  return (
    <div className="menu">
      <h2>Our Menu:</h2>
      <ul className="pizzas">
        {pizzaData.map((pizza) => (
          <Pizza
            key={pizza.name}
            name={pizza.name}
            ingredient={pizza.ingredients}
            image={pizza.photoName}
            price={pizza.price}
            soldOut={pizza.soldOut}
          />
        ))}
      </ul>
    </div>
  );
}

function Pizza({
  name = "Pizza Invisibile",
  ingredient = "*nothing at all*",
  image,
  price = 0,
  soldOut = true,
}) {
  return (
    <li className={`pizza ${soldOut && "sold-out"}`}>
      <img src={image} alt="*Image Missing*" />
      <div>
        <h3>{name}</h3>
        <p>{ingredient}</p>
        <span>{soldOut ? "-SOLD OUT-" : `$${price}`}</span>
      </div>
    </li>
  );
}

// React >= v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
