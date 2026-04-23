import React from "react";
import "./Css/Header.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="mainHeader">
      <main className="menuHeader">
        <div className="logoHeader">
          <h1>
            gr<span>o</span>ceria
          </h1>
        </div>
        <nav className="midHeader">
          <section className="wrapper">
            <Button onClick={() => navigate("/")} className="btn" text="Home" />
            <Button
              onClick={() => navigate("/Stores")}
              className="btn1"
              text="Stores"
            />
          </section>
          <section className="searchBar">
            <input className="search" placeholder="search for food item" />
            <Button className="btn3" text="Search" />
          </section>
        </nav>
        <aside className="rightHeader">
          <AiOutlineShoppingCart
            className="cartLogo"
            onClick={() => navigate("/CartPage")}
          />
          <Button
            onClick={() => navigate("/Register")}
            className="btn2"
            text="Register"
          />
          <Button
            onClick={() => navigate("/LoginPage")}
            className="btn4"
            text="Login"
          />
        </aside>
      </main>
    </header>
  );
};

export default Header;
