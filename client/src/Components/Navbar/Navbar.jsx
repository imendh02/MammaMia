import React, { useContext,useState, useEffect, useRef } from 'react';
import "./Navbar.css";
import { Link } from "react-router-dom";
import { MenuItems } from "./MenuItems";
import { AuthContext } from "../../context/authContext";
import ShoppingCartOutlinedIcon from "@mui/icons-material/ShoppingCartOutlined";
import Cart from "../Cart/Cart";
import { useSelector } from "react-redux";
import { GoSignIn } from 'react-icons/go';
import { RiRestaurant2Fill } from 'react-icons/ri';
import { BiLogOut } from 'react-icons/bi';
import { BsBagCheck } from 'react-icons/bs';

function Navbar() {
  const products = useSelector((state) => state.cart.products);

  const { currentUser, logout } = useContext(AuthContext);


  const [open, setOpen] = useState(false);
  const [open2, setOpen2] = useState(false);

  let menuRef = useRef();
  let menuRef2 = useRef();

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef.current.contains(e.target)){
        setOpen(false);
        console.log(menuRef.current);
      }      
    };
    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }
  });

  useEffect(() => {
    let handler = (e)=>{
      if(!menuRef2.current.contains(e.target)){
        setOpen2(false);
        console.log(menuRef.current);
      }      
    };
    document.addEventListener("mousedown", handler);
    

    return() =>{
      document.removeEventListener("mousedown", handler);
    }

  });

  return (
    <nav id="Navbar">
      <div className="nav-logo">
        <Link to="/"><img src="/Images/Logo.svg" alt="" /></Link>
      </div>
      <ul className="navMenu">
        {MenuItems.map((item, index) => {
          return (
            <li key={index}>
              <Link className={item.class} to={item.url}>
                {item.title}
              </Link>
            </li>
          );
        })}
        <div class="dot"></div>
      </ul>
      <div className="nav-buttons">
        <div className='menu-container' ref={menuRef}>
          <div className='menu-user'>
            <div className='menu-trigger' onClick={()=>{setOpen(!open)}}>
              <img src='/Images/user.svg' alt='' className='icon' />
            </div>
            <div className={`dropdown-menu ${open? 'active' : 'inactive'}`} >
              {currentUser ? (
                <div className='profil'>
                  <h3>User Account</h3>
                  <h4>{currentUser?.username}</h4>
                  <ul>
                    <li><button><RiRestaurant2Fill className='drop-icon'/><span>My Reservations</span></button></li>
                    <li><button><BsBagCheck className='drop-icon'/><span>My Orders</span></button></li>
                    <li><button onClick={logout}><BiLogOut className='drop-icon'/><span>Logout</span></button></li>
                  </ul>
                </div>
              ) : (
                <Link to="./Login" className='link'><button className='but'>Connexion<GoSignIn className='but-icon'/></button></Link>
              )}
            </div>
          </div>
          <div className='menu-cart'>
            <div className='menu-trigger sh' onClick={()=>{setOpen2(!open2)}}>
              <ShoppingCartOutlinedIcon className='icon'/>
              <span>{products.length}</span>
            </div>
            <div className={`dropdown-menu2 ${open2? 'active' : 'inactive'}`} >
              {products.length === 0 ? (
                <h2 className='nocart'>No Products in the cart.</h2>
              ) : (
              <Cart />
            )}
            </div>
          </div>
          </div>
          <Link to="./Reservation"><button className='but-nav'>Reservation</button></Link>
        {/*{currentUser?.username}
        <div className="icon" onClick={() => setOpen(!open)}>
          <ShoppingCartOutlinedIcon />
          <span>{products.length}</span>
        </div>
        {open && <Cart />}
        <button className='but-nav'>Reservation</button>
        <span>
          {currentUser ? (
            <button onClick={logout}>Logout</button>
          ) : (
            <Link to="/login">
              <button>Login</button>
            </Link>
          )}
          </span>*/}
      </div>
    </nav>
  );
}

export default Navbar;
