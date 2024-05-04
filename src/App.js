import { db } from './FirebaseConfig';
import './pages/shop/shop.css';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import {Jewellery} from './pages/shop/Jewellery';
import { ShopContextProvider } from './context/shop-context';
import { BrowserRouter as Router, Routes, Route,Navigate } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Checklist from './features/checklist';
import List from './budget';
import Home from'./startpage/AppSP';
import NavbarSP from './startpage/componentsSP/NavbarSP';
import { getDocs, doc, collection } from 'firebase/firestore';
import Blog from './startpage/cardfollow/Blog';
import {Bridal} from './pages/shop/Bridal';
import  Catering from './pages/shop/Catering';
import RealWedding from './startpage/cardfollow/RealWedding';
import Login from './Login';
import Mymap from './mymap';

function App() {

  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <NavbarSP />
          <Routes>
             <Route path="/"  element={ <Home />}/>
            <Route path="/catering" exact element={ <Catering />}/>
            <Route path="/wedding" exact element={ <RealWedding />}/>
            <Route path="/jewellery" exact element={ <Jewellery />}/>
            <Route path="/outfit" exact element={ <Bridal />}/>
            <Route path="/blog" exact element={<Blog/>} />
            <Route path="/mymap" exact element={<Mymap/>} />
            <Route path="/shop" exact element={<Shop />} />
            <Route path="/cart"exact element={<Cart />} />
            <Route path="/Login"exact element={<Login />} /> 
            <Route path="/checklist" exact element={<Checklist />} />

          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;



