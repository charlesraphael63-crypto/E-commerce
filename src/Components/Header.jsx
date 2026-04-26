// import React from "react";
// import "./Css/Header.css";
// import Button from "./Button";
// import { useNavigate } from "react-router-dom";
// import { AiOutlineShoppingCart } from "react-icons/ai";
// import { useSelector } from "react-redux";

// const cartItems = useSelector((state) => state.cart);
// const Header = () => {
//   const navigate = useNavigate();
//   return (
//     <header className="mainHeader">
//       <main className="menuHeader">
//         <div className="logoHeader">
//           <h1>
//             gr<span>o</span>ceria
//           </h1>
//         </div>
//         <nav className="midHeader">
//           <section className="wrapper">
//             <Button onClick={() => navigate("/")} className="btn" text="Home" />
//             <Button
//               onClick={() => navigate("/stores")}
//               className="btn1"
//               text="Stores"
//             />
//           </section>
//           <section className="searchBar">
//             <input className="search" placeholder="search for food item" />
//             <Button className="btn3" text="Search" />
//           </section>
//         </nav>
//         <aside className="rightHeader">
//           <div className="cartWrap">
//             <AiOutlineShoppingCart
//               className="cartLogo"
//               onClick={() => navigate("/cartPage/:id")}
//             />
//             <span>{cartItems.length}</span>
//           </div>
//           <Button
//             onClick={() => navigate("/register")}
//             className="btn2"
//             text="Register"
//           />
//           <Button
//             onClick={() => navigate("/loginPage")}
//             className="btn4"
//             text="Login"
//           />
//         </aside>
//       </main>
//     </header>
//   );
// };

// export default Header;

import React from "react";
import "./Css/Header.css";
import Button from "./Button";
import { useNavigate } from "react-router-dom";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { useSelector } from "react-redux";

const Header = () => {
  const navigate = useNavigate();
  const cartItems = useSelector((state) => state.cart);

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
              onClick={() => navigate("/stores")}
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
          <div className="cartWrap">
            <AiOutlineShoppingCart
              className="cartLogo"
              onClick={() => navigate("/cartPage")}
            />
            <span>{cartItems.length}</span>
          </div>
          <Button
            onClick={() => navigate("/register")}
            className="btn2"
            text="Register"
          />
          <Button
            onClick={() => navigate("/loginPage")}
            className="btn4"
            text="Login"
          />
        </aside>
      </main>
    </header>
  );
};

export default Header;
