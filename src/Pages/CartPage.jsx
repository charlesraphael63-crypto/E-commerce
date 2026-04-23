import React, { useState } from "react";
import { FiPlus, FiMinus } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import Button from "../Components/Button";
import "../Components/Css/CartPage.css";
import { useNavigate } from "react-router-dom";

const CartPage = () => {
  const nav = useNavigate();
  // const [cardUpdate, setCardUpdate] = useState(false)

  return (
    <div className="wrapper">
      <main className="mainCard">
        <section className="menuLeft">
          <header className="mainHead">
            <h2>Your Cart (1 item)</h2>
            <ul className="cartWrap">
              <li>Product</li>
              <li>Unit Price</li>
              <li>Total</li>
              <li>Remove</li>
            </ul>
          </header>
          <article className="cartFormat">
            <div className="imgWrap">
              <img
                className="image"
                src="/src/assets/asset 6 1.png"
                alt="/src/assets/asset 6 1.png"
              />
              <section className="textWrap">
                <p>Yam-Grade B</p>
                <span>500kg</span>
              </section>
            </div>
            <p className="para">Quantity</p>
            <section className="quantityWrap">
              <div className="top">
                <FiPlus className="edit" />
                <span className="edit">1</span>
                <FiMinus className="edit" />
              </div>
              <nav className="side">
                <span>
                  <TbCurrencyNaira /> 900:00
                </span>
                <span>
                  <TbCurrencyNaira /> 900:00
                </span>
                <Button className="wrap" text="Remove" />
              </nav>
            </section>
            <div className="btnWrap">
              <Button
                onClick={() => nav("/")}
                className="btnAdd"
                text="Add more items"
              />
              <Button className="btnRemove" text="Remove" />
            </div>
          </article>
        </section>
        <aside className="menuRight">
          <div className="centerEdit">
            <section className="top">
              <div className="wrappers">
                <p>Subtotal:</p>
                <span>
                  <TbCurrencyNaira /> 900:00
                </span>
              </div>
              <div className="wrap">
                <span>0.5kg</span>
              </div>
              <aside className="bottom">
                <input type="checkbox" />
                <p>
                  i have read the instruction above and i agree to{" "}
                  <span>Groceria's Return Policy</span>{" "}
                </p>
              </aside>
            </section>
            <Button
              onClick={() => nav("/CheckOutPage")}
              className="btnEdit"
              text="Proceed to checkout"
            />
          </div>
        </aside>
      </main>
    </div>
  );
};

export default CartPage;
