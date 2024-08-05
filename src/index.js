import React from "react";
import ReactDOM from "react-dom/client";

function App() {
  return (
    <>
      <h1>Hello World!</h1>
      <Pizza />
    </>
  );
}

function Pizza() {
  return (
    <>
      <h2>Pizza Spinaci</h2>
      <img src="pizzas/spinaci.jpg" alt="Spinaci Pizza img" />
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </>
  );
}

// React >= v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
