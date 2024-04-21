import './componentsSP/AppSP.css';
import Navbar from './componentsSP/NavbarSP';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './componentsSP/PagesSP/Home';
import Blog from './cardfollow/Blog';
import Jewellery from '../pages/shop/Jewellery';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route path='/home' exact element={ <Home />}/>
    <Route path="/blog" exact element={<Blog/>} />
    <Route path="/jewellery" exact element={<Jewellery/>} />
    </Routes>
    </Router>
    </>
  );
}

export default Home;


