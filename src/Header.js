import React from 'react'
import './Header.css'
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import {Link} from "react-router-dom";
import { useStateValue } from './StateProvider';
import { auth } from './firebase';

function Header() {
    const[{basket, user}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if(user){
            auth.signOut();
        }
    }

  return (
    <div className = 'header'>
        <Link to="/">
        <img 
        className = "header-logo" 
        src='https://pngimg.com/uploads/amazon/amazon_PNG11.png' alt=""
        />
        </Link>
        
        
        <div className = "header-search">
            <input
            className = "header-searchInput"
            type = "text"/>
            <SearchIcon className="header-searchIcon"/>
        </div>

        <div className="header-nav">
            <Link to={!user && "/login"}>
            <div onClick={handleAuthentication} className ="header-option">
                <span className ='header-optionLine1'>Hello, {user ? user.email : "Guest"}</span>
                <span className ='header-optionLine2'>{user ? "Sign out" : "Sign in"}</span>
            </div>
            </Link>

            <Link to="/orders">
            <div className ="header-option">
                <span className ='header-optionLine1'>Returns</span>
                <span className ='header-optionLine2'>& Orders</span>
            </div>
            </Link>

            <div className="header-option">
                <span className ='header-optionLine1'>Your</span>
                <span className ='header-optionLine2'>Prime</span>
            </div>

            <Link to="/checkout">
            <div className='header-optionCart'>
                <ShoppingCartIcon />
                <span className="header-optionLine2 header-cartCount">{basket?.length}</span>
            </div>
            </Link>
        </div>
    </div>
  )
}

export default Header