import React, { useEffect, useState } from "react";
import "../Components/Css/ProductPage.css";
import Image from "../Components/Image";
import Button from "../Components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const ProductPage = () => {
  const nav = useNavigate();
  const [getData, setGetData] = useState([]);
  const getElement = async () => {
    const url = "https://api.escuelajs.co/api/v1/products";
    try {
      const res = await axios.get(url);
      setGetData(res?.data);
      console.log(res.data);
    } catch (err) {
      console.log(err);
    }
  };
  useEffect(() => {
    getElement();
  }, []);
  return (
    <main className="mainProduct">
      <section className="menuProduct">
        {getData?.map((item) => (
          <div key={item.id} className="wrap">
            <Image
              className="imgProduct"
              src={item.images?.[0]}
              alt={item.title}
            />
            <h3>{item?.title} </h3>
            <h4>${item?.price}</h4>
            <p>{item?.description} </p>
            <Button
              className="btnProduct"
              text="Add to Cart"
              onClick={() => nav(`/detailPage/${item.id}`)}
            />
          </div>
        ))}
      </section>
    </main>
  );
};

export default ProductPage;
