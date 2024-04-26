import React ,{useState,useEffect} from 'react';
import { Link } from 'react-router-dom';
import logoImage from './JODI JUNCTION_transparent.png'
import Button from './Button';
import './NavbarSP.css';
import { ShoppingCart } from 'phosphor-react';
import {useNavigate} from 'react-router-dom'

const NavbarSP = () => {
  const[click,setClick]= useState(false);
  const [button ,setButton]= useState(true);
  const navigate = useNavigate();

  const handleClick = () => setClick(!click);
  const closeMobileMenuu = () => setClick(false);
  const handleSubmit =(e) => {

<Link to="/login" className="btn--link">SIGN UP</Link>
  }

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    }
    else{
      setButton(true);
    }
  };
  window.addEventListener('resize',showButton);

  useEffect(() => {
    showButton();
  },[]);


  return (
    <nav className="navbar">
      <div className='navbar-container'>
        <Link to="/" className="navbar-logo">
        JODI JUNCTION <i class='fab fa-typo3' />
        </Link>
        <div className="menu-icon" onClick={handleClick}>
        <i className={click ? 'fas fa-times' : 'fas fa-bars'}/>
        </div>
        <ul className={click ? 'nav-menu active' : 'nav-menu'} >
        <li className='nav-item'>
          <Link to='/' className='nav-links' onClick={closeMobileMenuu}>
            Home
          </Link>
        </li>
        <li className='nav-item'>
          <Link to='/Budget' className='nav-links' onClick={closeMobileMenuu}>
            Budget
          </Link>
        </li>
      
        <li className='nav-item'>
  <Link to='/' className='nav-links' onClick={closeMobileMenuu}>
    Vendors
  </Link>
  <ul className='dropdown-menu'>
    <li className='dropdown-item'>
      <Link to='/jewellery' className='dropdown-link'>Jewellery</Link>
    </li>
    <li className='dropdown-item'>
      <Link to='/outfit' className='dropdown-link'> Bridal Wear</Link>
    </li>
    <li className='dropdown-item'>
      <Link to='/catering' className='dropdown-link'>Caterors</Link>
    </li>
    <li className='dropdown-item'>
      <Link to='/shop' className='dropdown-link'>Decor</Link>
    </li>
    {/* Add more dropdown items as needed */}
  </ul>
</li>
       <li className='nav-item'>
          <Link to='/checklist' className='nav-links' onClick={closeMobileMenuu}>
            Checklist
          </Link>
        </li>
        <li>   
  <div className="login-btn-container">
    <Link to="/login" className="btn--link">
      <button className="btn" buttonStyle="btn--outline">Login</button>
    </Link>
  </div>     
</li>

        </ul>
      </div> 
      <div className="links">
        <Link to="/shop">Shop</Link>
        <Link to="/cart">
          <ShoppingCart size={32} />
        </Link>
      </div>
    </nav>
  );
}

export default NavbarSP;
