import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Reservation from "./Components/Reservation/Index";
import Menu from "./Components/Menu/Menu";
import SigninSignup from "./Components/SigninSignup/SigninSignup";
import Home from "./Components/Home/Home";
import Shop from "./Components/Shop/Shop";
import Success from "./Components/Success";
import SingleProduct from "./Components/SingleProduct/SingleProduct";

function App() {
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/Reservation" element={<Reservation />} />
        <Route exact path="/Menu" element={<Menu />} />
        <Route exact path="/Login" element={<SigninSignup />} />
        <Route exact path="/Shop" element={<Shop />} />
        <Route exact path="/ProductDetails" element={<SingleProduct />} />
        <Route exact path="/checkout" element={<Success />} />
      </Routes>
    </Router>
  );
}

export default App;
