// import React from "react";
// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import LandingPage from "./Pages/LandingPage";
// import Stores from "./Pages/Stores";
// import Register from "./Pages/Register";
// import LoginPage from "./Pages/LoginPage";
// import ErrorPage from "./Pages/ErrorPage";
// import DetailPage from "./Pages/DetailPage";
// import CartPage from "./Pages/CartPage";
// import CheckOutPage from "./Pages/CheckOutPage";
// import Header from "./Components/Header";
// // import CartPage from './Pages/CartPage'
// // import CheckOutPage from './Pages/CheckOutPage'

// const App = () => {
//   return (
//     <div>
//       <BrowserRouter>
//         <Header />
//         <Routes>
//           <Route path="*" element={<ErrorPage />}></Route>
//           <Route path="/" element={<LandingPage />}></Route>
//           <Route path="/stores" element={<Stores />}></Route>
//           <Route path="/register" element={<Register />}></Route>
//           <Route path="/loginPage" element={<LoginPage />}></Route>
//           <Route path="/detailPage/:id" element={<DetailPage />}></Route>
//           <Route path="/cartPage/:id" element={<CartPage />}></Route>
//           <Route path="/checkOutPage" element={<CheckOutPage />}></Route>
//         </Routes>
//       </BrowserRouter>
//     </div>
//   );
// };

// export default App;

import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LandingPage from "./Pages/LandingPage";
import Stores from "./Pages/Stores";
import Register from "./Pages/Register";
import LoginPage from "./Pages/LoginPage";
import ErrorPage from "./Pages/ErrorPage";
import DetailPage from "./Pages/DetailPage";
import CartPage from "./Pages/CartPage";
import CheckOutPage from "./Pages/CheckOutPage";
import Header from "./Components/Header";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="*" element={<ErrorPage />} />
          <Route path="/" element={<LandingPage />} />
          <Route path="/stores" element={<Stores />} />
          <Route path="/register" element={<Register />} />
          <Route path="/loginPage" element={<LoginPage />} />
          <Route path="/detailPage/:id" element={<DetailPage />} />
          <Route path="/cartPage" element={<CartPage />} />
          <Route path="/checkOutPage" element={<CheckOutPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
