import { BrowserRouter as Router, Route, Routes, useFetcher } from "react-router-dom";
import Home from "./pages/Home";
import Layout from "./components/Layout";
import Headphones from "./pages/Headphones";
import Speakers from "./pages/Speakers";
import Earphones from "./pages/Earphones";
import ProductPage from "./pages/ProductPage";
import { useSelector } from "react-redux";
import Checkout from "./pages/Checkout";

function App() {
  const isShowing = useSelector((state) => state.cart.isShowing);
  const menu = useSelector(state=>state.menu.value)  
 
 
  return (
    <>
      <div 
       className={`${(isShowing || menu) && 'lightbox z-10'}`}>
        <Router>
          <Routes>
            <Route path='/' element={<Layout />}>
              <Route index element={<Home />} />
              <Route path='/headphones' element={<Headphones />} />
              <Route path='/speakers' element={<Speakers />} />
              <Route path='/earphones' element={<Earphones />} />
              <Route path='/product/:name' element={<ProductPage />} />
            </Route>
            
              <Route path='/checkout' element={<Checkout />} />
          </Routes>
        </Router>
      </div>
    </>
  );
}

export default App;
