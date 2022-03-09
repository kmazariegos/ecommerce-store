import React from 'react'
import './Navbar.css'
import Search from '@mui/icons-material/Search';
import Badge from '@mui/material/Badge';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';


const Navbar = () => {
  return (
    <div className='navbar-container'>
      <div className='nav-wrapper'>

          <div className='nav-left'>
          <span className='nav-language'>EN</span>
          <div className='nav-search-container'>
            <input className='nav-input'></input>
            <Search style={{color:"gray", fontSize: 16}}></Search>
          </div>
          </div>

        <div className='nav-center'>
          <h1 className='nav-logo'>Shopify</h1>
        </div>

        <div className='nav-right'>
          <div className='nav-menu-item'>Register</div>
          <div className='nav-menu-item'>Sign-in</div>
          <div className='nav-menu-item'>
          <Badge badgeContent={4} color="secondary">
            <ShoppingCartOutlinedIcon></ShoppingCartOutlinedIcon>
          </Badge>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Navbar