import "./App.css";
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import ProductDetail from "./Components/ProductDetail/ProductDetail";
import ProductCategoryContainer from "./Components/ProductCategoryContainer/ProductCategoryContainer";
import Contacto from "./Components/Contacto/Contacto";
import Nosotros from "./Components/Nosotros/Nosotros";
import CartProvider from "./Components/CartContext/CartContext";
import CheckOut from "./Components/CheckOut/CheckOut";
import CheckOutPayment from './Components/CheckOutPayment/CheckOutPayment'
import PaymentResult from "./Components/PaymentResult/PaymentResult";
import CheckOutProV2 from "./Components/MercadoPagoComp/CheckOutProV2";


function App() {
  return (
    <BrowserRouter>
      <CartProvider>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/mercadopago" element={<MercadoPagoComp />} /> */}
          <Route path="/products/:id" element={<ProductDetail />} />
          <Route
            path="/products/category/:category"
            element={<ProductCategoryContainer />}
          />
          <Route path="/contact" element={<Contacto />} />
          <Route path="/about" element={<Nosotros />} />
          <Route path="/checkoutprov2" element={<CheckOutProV2 />} />
          <Route path="/checkout" element={<CheckOut />} />
          <Route path="/checkout/payment" element={<CheckOutPayment />} />
          <Route path="/checkout/payment/result" element={<PaymentResult />} />
          <Route />
        </Routes>
        <Footer />
      </CartProvider>
    </BrowserRouter>
  );
}

export default App;
