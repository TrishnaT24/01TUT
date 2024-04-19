import './componentsSP/AppSP.css';
import Navbar from './componentsSP/NavbarSP';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Home from './componentsSP/PagesSP/Home';

function App() {
  return (
    <>
    <Router>
    <Navbar />
    <Routes>
    <Route path='/home' exact element={ <Home />}></Route>
    </Routes>
    </Router>

    </>
  );
}

export default Home;
