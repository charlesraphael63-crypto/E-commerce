// import React, { useContext, useEffect, useState } from "react";
// import "../Components/Css/ProductPage.css";
// import Image from "../Components/Image";
// import Button from "../Components/Button";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { addToCart } from "../Store/CartSlice";
// import { useDispatch } from "react-redux";
// import { CartContext } from "../Context/CartContext";

// const ProductPage = () => {
//   const nav = useNavigate();
//   const { dispatch } = useContext(CartContext);
//   const dispatchToRedux = useDispatch();
//   const [isLoading, setIsLoading] = useState([]);

//   const [getData, setGetData] = useState([]);
//   const getElement = async () => {
//     const url = "https://api.escuelajs.co/api/v1/products";
//     try {
//       const res = await axios.get(url);
//       setGetData(res?.data);
//       setIsLoading(false);
//       console.log(res.data);
//     } catch (err) {
//       setIsLoading(false);
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     getElement();
//   }, []);

//   return (
//     <main className="mainProduct">
//       <section className="menuProduct">
//         {isLoading ? (
//           <div className="loading">
//             <h2>Loading....</h2>
//           </div>
//         ) : (
//           getData?.map((item) => (
//             <div key={item.id} className="wrap">
//               <Image
//                 onClick={() => nav(`detailsPage/${item.id}`)}
//                 className="imgProduct"
//                 src={item.images?.[0]}
//                 alt={item.title}
//               />
//               <h3>{item?.title} </h3>
//               <h4>${item?.price}</h4>
//               <p>{item?.description} </p>
//               <Button
//                 className="btnProduct"
//                 text="Add to Cart"
//                 // onClick={() => nav(`/cartPage/${item.id}`)}
//                 onClick={() =>
//                   dispatchToRedux(
//                     addToCart({
//                       id,
//                       name,
//                       priceRange,
//                       image,
//                     }),
//                   )
//                 }
//               />
//             </div>
//           ))
//         )}
//       </section>
//     </main>
//   );
// };

// export default ProductPage;

import React, { useEffect, useState } from "react";
import "../Components/Css/ProductPage.css";
import Image from "../Components/Image";
import Button from "../Components/Button";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../Store/CartSlice";
import { useDispatch } from "react-redux";

const ProductPage = () => {
  const nav = useNavigate();
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true);
  const [getData, setGetData] = useState([]);

  const getElement = async () => {
    const url = "https://api.escuelajs.co/api/v1/products";
    try {
      const res = await axios.get(url);
      setGetData(res?.data);
      setIsLoading(false);
    } catch (err) {
      setIsLoading(false);
      console.error(err);
    }
  };

  useEffect(() => {
    getElement();
  }, []);

  return (
    <main className="mainProduct">
      <section className="menuProduct">
        {isLoading ? (
          <div className="loading">
            <h2>Loading....</h2>
          </div>
        ) : (
          getData?.map((item) => (
            <div key={item.id} className="wrap">
              <Image
                onClick={() => nav(`/detailPage/${item.id}`)}
                className="imgProduct"
                src={item.images?.[0]}
                alt={item.title}
              />
              <h3>{item?.title}</h3>
              <h4>₦{item?.price}</h4>
              <p>{item?.description}</p>
              <Button
                className="btnProduct"
                text="Add to Cart"
                onClick={() =>
                  dispatch(
                    addToCart({
                      id: item.id,
                      title: item.title,
                      price: item.price,
                      description: item.description,
                      images: item.images,
                    }),
                  )
                }
              />
            </div>
          ))
        )}
      </section>
    </main>
  );
};

export default ProductPage;
