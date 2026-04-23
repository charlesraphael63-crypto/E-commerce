import React from "react";
import "../Components/Css/DetailPage.css";
import { FaLessThan, FaGreaterThan, FaRegStar } from "react-icons/fa6";
import {} from "react-icons/fa";
import Button from "../Components/Button";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const DetailPage = () => {
  const nav = useNavigate();
  const { id } = useParams();
  const [singleData, setSingleData] = useState([]);
  const getSingleData = async () => {
    const url = `https://api.escuelajs.co/api/v1/products/${id}`;
    try {
      const res = await axios.get(url);
      setSingleData(res?.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getSingleData();
  }, []);
  return (
    <main className="mainHero">
      <aside className="leftHero">
        <div className="top">
          <h3>
            Designed by <span>Thomas Jonas</span>
          </h3>
          <p>
            <FaRegStar className="starEdit" />
            4.5 (89 reviews)
          </p>
          <section className="wraps">
            <div className="img"></div>
            <div className="img1"></div>
            <div className="img2"></div>
            <div className="img3"></div>
          </section>
        </div>
        <article className="bottom">
          <div className="wrap">
            <FaLessThan className="btn1" />
          </div>
          <img
            className="carocel"
            src={singleData?.images?.[0]}
            alt={singleData?.title}
          />
          <div className="wrap">
            <FaGreaterThan className="btn1" />
          </div>
        </article>
      </aside>

      <section className="rightHero">
        <main className="wrappers">
          <div className="topSide">
            <h1>Test Ega Lagi</h1>
            <h5>Item code: 98</h5>
            <h4>DESCRIPTION</h4>
            <h5>Test</h5>
          </div>
          <section className="midSide">
            <h4>PRICE</h4>
            <h1>$12</h1>
            <h4>COLOR</h4>
            <select name="color-picker" id="colorWrapper">
              <option value="green">GREEN</option>
              <option value="blue">BLUE</option>
              <option value="orange">ORANGE</option>
              <option value="purple">PURPLE</option>
            </select>
            <h4>QUANTITY</h4>
            <div className="cartEdit">
              <select name="cart-number" id="cartNum">
                <option value="one">01</option>
                <option value="two">02</option>
                <option value="three">03</option>
                <option value="four">04</option>
                <option value="five">05</option>
              </select>
              <Button
                onClick={() => nav("/CartPage")}
                className="button"
                text="ADD TO CART"
              />
            </div>
          </section>
          <aside className="bottomSide">
            <h4>DETAILS</h4>
            <h4>DELIVERY</h4>
            <h4>RETURN</h4>
          </aside>
        </main>
      </section>
    </main>
  );
};

export default DetailPage;
