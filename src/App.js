

import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/product_22.jpg'
import women_banner from './Components/Assets/product_1.jpg'
import kid_banner from './Components/Assets/product_30.jpg'
import Product from './Pages/Product';
// import CartItems from './Components/CartItems/CartItems';


function App() {
  return (
    <div>
    <BrowserRouter>
    <Navbar/>
    <Routes>
    <Route path='/' element={<Shop/>}/>
    <Route path='/mens' element={<ShopCategory  banner={men_banner} category="men"/>}/>
    <Route path='/womens' element={<ShopCategory  banner={women_banner}  category="women"/>}/>
    <Route path='/kids' element={<ShopCategory  banner={kid_banner}  category="kid"/>}/>
    <Route path="/product" element={<Product/>}>
      <Route path=':productId' element={<product/>}/>
    </Route>
    <Route path='/cart' element={<Cart/>}/>
    {/* <Route path='/cart' element={<CartItems/>}/> */}
    <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
