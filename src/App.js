/*import Header from './Header';
import SearchItem from './SearchItem';
import AddItem from './AddItem';
import Content from './Content';
import Footer from './Footer';
import { useState, useEffect } from 'react';
import Checklist from './Checklist';
import List from './Budget';
import Missing from './Missing';
import Login from './Login';
import { BrowserRouter as Router,Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import { ShopContextProvider } from './context/shop-context';


function App() {
  return (

    <div className='App'>
      <Router>
        <Routes>
          <Route path="/Appjheel" element={<Appjheel />} />
          <Route path ="/Login" element ={<Login />} />
          <Route path="/checklist" element={<Checklist />} />
          <Route path="/budget" element={<List />} />
          <Route path="/missing" element={<Missing />} />
        </Routes>
      </Router>
    </div>



  );
}

export default App;
*/
import { db } from './FirebaseConfig';
import './pages/shop/shop.css';
/*import { Navbar } from './components/Navbar';*/
import { Shop } from './pages/shop/Shop';
import { Cart } from './pages/cart/Cart';
import {Jewellery} from './pages/shop/Jewellery';
import { ShopContextProvider } from './context/shop-context';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Checklist from './Checklist';
import List from './budget';
import Login from './Login';
import Home from'./startpage/AppSP';
import NavbarSP from './startpage/componentsSP/NavbarSP';
import { getDocs, doc, collection } from 'firebase/firestore';
import Blog from './startpage/cardfollow/Blog';

function App() {
  useEffect(() => {
    // Fetch data from Firestore when component mounts
    const fetchData = async () => {
        const querySnapshot = await getDocs(collection(db,'cart'));
        querySnapshot.forEach(doc => {
          console.log(doc.data());
        });
      // catch (error) {
      //   console.error('Error fetching data from Firestore:', error);
      // }
    };

    fetchData();
  }, []);
  return (
    <div className='App'>
      <ShopContextProvider>
        <Router>
          <NavbarSP />
          <Routes>
            <Route path="/home" exact element={ <Home />}/>
            <Route path="/jewellery" exact element={ <Jewellery />}/>
            <Route path="/blog" exact element={<Blog/>} />
            <Route path="/" element={<Shop />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/Login" element={<Login />} />
            <Route path="/checklist" element={<Checklist />} />
            <Route path="/budget" element={<List />} />
          </Routes>
        </Router>
      </ShopContextProvider>
    </div>
  );
}

export default App;



