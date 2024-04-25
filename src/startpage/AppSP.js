import './componentsSP/AppSP.css';
import Navbar from './componentsSP/NavbarSP';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './componentsSP/PagesSP/Home';
import Blog from './cardfollow/Blog';
import {Jewellery} from '../pages/shop/Jewellery';
import {Bridal} from '../pages/shop/Bridal';
import Catering from '../pages/shop/Catering';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route path='/' exact element={ <Home />}/>
    <Route path="/blog" exact element={<Blog/>} />
    <Route path="/jewellery" exact element={<Jewellery/>} />
    <Route path="/outfit" exact element={<Bridal/>} />
    <Route path="/catering" exact element={<Catering/>} />
    </Routes>
    </Router>
    </>
  );
}

export default Home;


