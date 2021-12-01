import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Home from "./views/Home";
import Products from "./views/Products";
import Footer from "./components/Footer/Footer";
import ItemList from "./components/Products/containers/ItemList";
import ItemDetailContainer from "./components/Products/containers/ItemDetailContainer";
import NotMatch from "./components/NotMatch/NotMatch";
import { useState } from "react";
import { Routes, Route } from "react-router-dom";

function App() {
  const [allProducts, setAllProducts] = useState([]);
  const [cart, setCart] = useState([]);
  return (
    <div className="App">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/products"
          element={
            <Products
              ItemListContainer={ItemList}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="/products/:idProduct" element={<ItemDetailContainer />} />
        <Route
          path="/category/:idCategory"
          element={
            <Products
              ItemListContainer={ItemList}
              allProducts={allProducts}
              setAllProducts={setAllProducts}
              cart={cart}
              setCart={setCart}
            />
          }
        />
        <Route path="*" element={<NotMatch />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
