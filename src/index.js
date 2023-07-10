import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

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

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
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
function Menu() {
  // conditional Rendering.
  const pizzas = pizzaData;
  //  So here pizzas = empty string is a truthy value when we do conditional rendering with truthy value it will return the next expression. So here we are checking the length and making sure it is greater than 0. Other wise it will return 0 value on UI due to short circuiting.

  // const pizzas =[]
  const numPizzas = pizzas.length;
  return (
    <main className="menu">
      <h2>Our Menu</h2>
      
      {numPizzas > 0 ? (
        <>
        <p>Authentic Italian cuisine. 6 creative dishes to choose from.All from our stone oven, all organic, all delicious.</p>
        <ul>
          <div>
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name}></Pizza>
            ))}
          </div>
        </ul>
        </>
      ) : (
        <p>We're still working on our Menu. Please reach out to us later 😀 </p>
      )}
    </main>
  );
}

{
  /* <Pizza name="Pizza Spinaci" ingredients="Tomato, mozarella, spinach, and ricotta cheese" price={10} photoName="pizzas/spinaci.jpg">
   </Pizza>
   <Pizza name="Pizza Funghi"
      ingredients= "Tomato, mozarella, mushrooms, and onion"
      price= {12}
      photoName= "pizzas/funghi.jpg"></Pizza> */
}

function Pizza({pizzaObj}) {
  return (
    <div className={`pizza ${pizzaObj.soldOut?"sold-out":""}`}>
      <div>
        <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      </div>
      <div>
        <h2>{pizzaObj.name}</h2>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ?"SOLD OUT": pizzaObj.price}</span>
      </div>
    </div>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const openHour = 9;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour;
  console.log(isOpen);
  return (
    // React.createElement("footer", null, "We're currently open!")
      <footer>
        {isOpen ? (
          <Order closeHour={closeHour} />
        ) : (
          <p>
            Sorry we're closed. Please visit us between {openHour}:00 to{" "}
            {closeHour}:00
          </p>
        )}
      </footer>
  );
}

function Order({openHour,closeHour}) {
  return (
    <div className="order">
      <p>
        We're open until {closeHour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

//  React v18
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// React BEFORE v18
// import ReactDOM from "react-dom"
// React.render(<App/>,document.getElementById("root"))
