import './App.css';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Shop from './Pages/Shop';
import ShopCategory from './Pages/ShopCategory';
import Cart from './Pages/Cart';
import LoginSignup from './Pages/LoginSignup';
import Footer from './Components/Footer/Footer';
import men_banner from './Components/Assets/mancro7.jpg'
import women_banner from './Components/Assets/womencro.9.jpg'
import kid_banner from './Components/Assets/kids-crochet.jpg'


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
    <Route path=':Product' element={<product/>}>
      <Route path=':productId' element={<product/>}/>
    </Route>
    <Route path='/cart' element={<Cart/>}/>
    <Route path='/login' element={<LoginSignup/>}/>
    </Routes>
    <Footer/>
    </BrowserRouter>
  
    </div>
  );
}

export default App;
