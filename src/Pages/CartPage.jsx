// import { FiPlus, FiMinus } from "react-icons/fi";
// import { TbCurrencyNaira } from "react-icons/tb";
// import Button from "../Components/Button";
// import "../Components/Css/CartPage.css";
// import { useParams } from "react-router-dom";
// import { useState, useEffect } from "react";
// import axios from "axios";
// import { useNavigate } from "react-router-dom";
// import { CartContext } from "../Context/CartContext";
// import { useContext } from "react";
// import { useSelector } from "react-redux";

// const CartPage = () => {
//   const { state, dispatch } = useContext(CartContext);
//   const cartItemsFromRedux = useSelector((state) => state.cart);
//   const nav = useNavigate();
//   const { id } = useParams();

//   const [imageData, setImageData] = useState([]);
//   const getImageData = async () => {
//     const url = `https://api.escuelajs.co/api/v1/products/${id}`;
//     try {
//       const res = await axios.get(url);
//       setImageData(res?.data);
//       console.log(res.data);
//     } catch (err) {
//       console.log(err);
//     }
//   };
//   useEffect(() => {
//     getImageData();
//   }, []);
//   // const [cardUpdate, setCardUpdate] = useState(false)

//   if (!state || state.length === 0) {
//     return (
//       <>
//         {/* <Header /> */}
//         <div className="empty">
//           <h1>Your cart is empty...</h1>
//         </div>
//       </>
//     );
//   }

//   return (
//     <div className="wrapper">
//       <main className="mainCard">
//         <section className="menuLeft">
//           <header className="mainHead">
//             <h2>Your Cart ({state.length})</h2>
//             <ul className="cartWrap">
//               <li>Product</li>
//               <li>Unit Price</li>
//               <li>Total</li>
//               <li>Remove</li>
//             </ul>
//           </header>

//           {cartItemsFromRedux?.map((item) => (
//             <article key={item.id} className="cartFormat">
//               <div className="imgWrap">
//                 <img
//                   className="image"
//                   src={item?.images?.[0]}
//                   alt={item?.title}
//                 />
//                 <section className="textWrap">
//                   <p>${item?.price}</p>
//                   <span>{item?.description}</span>
//                 </section>
//               </div>

//               <p className="para">Quantity</p>
//               <section className="quantityWrap">
//                 <div className="top">
//                   <FiPlus
//                     onClick={() => {
//                       dispatch({
//                         type: "DECREASE_QUANTITY",
//                         payload: item?.id,
//                       });
//                     }}
//                     className="edit"
//                   />
//                   <span className="edit">{item.quantity || 1}</span>
//                   <FiMinus
//                     onClick={() => {
//                       dispatch({
//                         type: "INCREASE_QUANTITY",
//                         payload: item?.id,
//                       });
//                     }}
//                     className="edit"
//                   />
//                 </div>
//                 <nav className="side">
//                   <span>
//                     <TbCurrencyNaira />
//                     Unit Price:₦ {item.price}
//                   </span>
//                   <span>
//                     <TbCurrencyNaira />
//                     Total:₦ {item.price * (item.quantity || 1)}
//                   </span>
//                   <Button className="wrap" text="Remove" />
//                 </nav>
//               </section>
//               <div className="btnWrap">
//                 <Button
//                   onClick={() => nav("/")}
//                   className="btnAdd"
//                   text="Add more items"
//                 />
//                 <Button
//                   onClick={() =>
//                     dispatch({
//                       type: "REMOVE_FROM_CART",
//                     })
//                   }
//                   className="btnRemove"
//                   text="Remove"
//                 />
//               </div>
//             </article>
//           ))}
//         </section>
//         <aside className="menuRight">
//           <div className="centerEdit">
//             <section className="top">
//               <div className="wrappers">
//                 <p>Subtotal :</p>
//                 <span>
//                   <TbCurrencyNaira />
//                   {state?.reduce(
//                     (acc, item) => acc + item?.price * (item.quantity || 1),
//                     0,
//                   )}
//                 </span>
//               </div>
//               <div className="wrap">
//                 <span>0.5kg</span>
//               </div>
//               <aside className="bottom">
//                 <input type="checkbox" />
//                 <p>
//                   i have read the instruction above and i agree to{" "}
//                   <span>Groceria's Return Policy</span>{" "}
//                 </p>
//               </aside>
//             </section>
//             <Button
//               onClick={() => nav("/CheckOutPage")}
//               className="btnEdit"
//               text="Proceed to checkout"
//             />
//           </div>
//         </aside>
//       </main>
//     </div>
//   );
// };

// export default CartPage;

import { FiPlus, FiMinus } from "react-icons/fi";
import { TbCurrencyNaira } from "react-icons/tb";
import Button from "../Components/Button";
import "../Components/Css/CartPage.css";
import { useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../Store/CartSlice";

const CartPage = () => {
  const cartItems = useSelector((state) => state.cart);
  const dispatch = useDispatch();
  const nav = useNavigate();

  if (!cartItems || cartItems.length === 0) {
    return (
      <div className="empty">
        <h1>Your cart is empty...</h1>
      </div>
    );
  }

  return (
    <div className="wrapper">
      <main className="mainCard">
        <section className="menuLeft">
          <header className="mainHead">
            <h2>Your Cart ({cartItems.length})</h2>
            <ul className="cartWrap">
              <li>Product</li>
              <li>Unit Price</li>
              <li>Total</li>
              <li>Remove</li>
            </ul>
          </header>

          {cartItems.map((item) => (
            <article key={item.id} className="cartFormat">
              <div className="imgWrap">
                <img
                  className="image"
                  src={item?.images?.[0]}
                  alt={item?.title}
                />
                <section className="textWrap">
                  <h4>{item?.title}</h4>
                  <span>{item?.description}</span>
                </section>
              </div>

              <p className="para">Quantity</p>
              <section className="quantityWrap">
                <div className="top">
                  <FiMinus
                    onClick={() => dispatch(decreaseQuantity(item.id))}
                    className="edit"
                  />
                  <span className="edit">{item.quantity}</span>
                  <FiPlus
                    onClick={() => dispatch(increaseQuantity(item.id))}
                    className="edit"
                  />
                </div>
                <nav className="side">
                  <p>
                    <span>Unit Price:</span> ₦{item.price}
                  </p>
                  <p>
                    <span>Total:</span> ₦{item.price * item.quantity}
                  </p>
                </nav>
              </section>
              <div className="btnWrap">
                <Button
                  onClick={() => nav("/")}
                  className="btnAdd"
                  text="Add more items"
                />
                <Button
                  onClick={() => dispatch(removeFromCart(item.id))}
                  className="btnRemove"
                  text="Remove"
                />
              </div>
            </article>
          ))}
        </section>
        <aside className="menuRight">
          <div className="centerEdit">
            <section className="top">
              <div className="wrappers">
                <p>Subtotal :</p>
                <span>
                  <TbCurrencyNaira />
                  {cartItems.reduce(
                    (acc, item) => acc + item.price * item.quantity,
                    0,
                  )}
                </span>
              </div>
              <aside className="bottom">
                <input type="checkbox" />
                <p>
                  I have read the instruction above and I agree to{" "}
                  <span>Groceria's Return Policy</span>
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
