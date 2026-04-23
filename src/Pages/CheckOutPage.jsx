import React from "react";
import { FaArrowLeft } from "react-icons/fa6";
import { TbCurrencyNaira } from "react-icons/tb";
import Button from "../Components/Button";
import Input from "../Components/Input";
import "../Components/Css/CheckOutPage.css";
import { useNavigate } from "react-router-dom";

const CheckOutPage = () => {
  const nav = useNavigate();
  return (
    <main className="mainWrappers">
      <div className="menuWrappers">
        <header className="topText">
          <FaArrowLeft className="backArrow" onClick={() => nav("/CartPage")} />
          <span>Back to Cart</span>
        </header>
        <h1>Checkout</h1>
        <section className="wrapContainer">
          <aside className="leftContainer">
            <section className="one">
              <div className="wrap">
                <h5>1</h5>
                <p>Contact Information</p>
              </div>
              <article className="space">
                <div className="wraps">
                  <p>First Name *</p>
                  <Input className="inputSpace" text="John" />
                </div>
                <div className="wraps">
                  <p>Last Name *</p>
                  <Input className="inputSpace" text="John" />
                </div>
              </article>
              <article className="space">
                <div className="wraps">
                  <p>Email Address *</p>
                  <Input className="inputSpace" text="John" />
                </div>
                <div className="wraps">
                  <p>Phone Number</p>
                  <Input className="inputSpace" text="John" />
                </div>
              </article>
            </section>
            <section className="two">
              <div className="wrap ">
                <h5>2</h5>
                <p>Shipping Address</p>
              </div>
              <article className="space">
                <div className="wraps1">
                  <p>Street Address *</p>
                  <Input className="inputSpace1" text="123 Main Street" />
                </div>
              </article>
              <article className="space">
                <div className="wraps">
                  <p>City *</p>
                  <Input className="inputSpace" text="Lagos" />
                </div>
                <div className="wraps">
                  <p>State *</p>
                  <Input className="inputSpace" text="Lagos" />
                </div>
              </article>
              <article className="space">
                <div className="wraps">
                  <p>ZIP Code *</p>
                  <Input className="inputSpace" text="100001" />
                </div>
              </article>
            </section>
            <article className="third">
              <div className="wraps">
                <h5>3</h5>
                <p>Shipping Address</p>
              </div>
              <main className="downWraps">
                <div className="wrapper12">
                  <Button className="inputEdit" text="Credit Card" />
                  <Button className="inputEdit" text="Bank Transfer" />
                </div>
                <div className="wrapper2">
                  <h6>Card Number</h6>
                  <Input className="inputWrite" text="1234 5678 9012 3456" />
                </div>
                <div className="wrapper2">
                  <h6>Name on Card</h6>
                  <Input className="inputWrite" text="John Doe" />
                </div>
                <section className="editWrap">
                  <div className="wrapper2">
                    <h6>Expiry Date</h6>
                    <Input className="inputEdit" text="expiry date" />
                  </div>
                  <div className="wrapper2">
                    <h6>CVV</h6>
                    <Input className="inputEdit" text="............" />
                  </div>
                </section>
              </main>
            </article>
            <Button className="btnEnd" text="Place Order" />
          </aside>
          <nav className="rightContainer">
            <h3 className="header">Order Summary</h3>
            <artcle className="secondCont">
              <div className="fCont">
                <p>
                  Yam-Grade B <Button>x2</Button>
                </p>
                <Button>
                  <TbCurrencyNaira className="naira" />
                  20,000
                </Button>
              </div>
              <div className="fCont">
                <p>
                  Rice - 5kg <Button>x1</Button>
                </p>
                <Button>
                  <TbCurrencyNaira className="naira" />
                  8,500
                </Button>
              </div>
              <div className="fCont">
                <p>
                  Beans - 2kg <Button>x3</Button>
                </p>
                <Button>
                  <TbCurrencyNaira className="naira" />
                  6,000
                </Button>
              </div>
            </artcle>
            <section className="thirdCont">
              <div className="sCont">
                <p>Subtotal </p>
                <Button>
                  <TbCurrencyNaira className="naira" />
                  34,500
                </Button>
              </div>
              <div className="sCont">
                <p>Delivery Fee </p>
                <Button>
                  <TbCurrencyNaira className="naira" />
                  1,500
                </Button>
              </div>
              <div className="sCont">
                <p>Tax </p>
                <Button>
                  <TbCurrencyNaira className="naira" />
                  500
                </Button>
              </div>
            </section>
            <div className="bottom">
              <div className="tCont">
                <h3>Total</h3>
                <Button>
                  <TbCurrencyNaira className="naira" />
                  36,500
                </Button>
              </div>
              <section className="checkEdit">
                <input type="checkbox" />
                <Button
                  className="btn"
                  text="Secure Checkout - Your information is protected"
                />
              </section>
            </div>
          </nav>
        </section>
      </div>
    </main>
  );
};

export default CheckOutPage;
