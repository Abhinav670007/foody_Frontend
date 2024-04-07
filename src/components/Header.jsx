import React, { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useNavigate } from 'react-router-dom'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import { toast } from 'react-toastify';
import { useDispatch } from 'react-redux'
import { clearCartItems } from '../redux/productSlice';

function Header() {
  const navigate = useNavigate()
  const dispatch  = useDispatch()

  const logout =()=>{
    handleClose()
    sessionStorage.removeItem('isLogin')
    toast.error("logout successfull")
    navigate("/")
    dispatch(clearCartItems())
  }

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (e) => {
    setAnchorEl(e.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const cartNumber = useSelector((state) => state.product.cartItem)
  return (
  <>
    <header className='fixed shadow-md  w-full h-16 px-2 md:px-4 z-50  bg-white'>
      {/* Desktop */}

      <div className='flex items-center h-full justify-between'>
        <div className='flex gap-3'>
          <Link to={'/'}><i class="fa-solid fa-bowl-food fa-2xl"></i></Link>
          <h2 className='text-2xl font-bold'><span className='text-green-600'>Fresh</span>Shop</h2>
        </div>
        <nav className='gap-4 md:gap-6 text-base md:text-lg hidden md:flex'>
          <div><Link to={'/'}>Home</Link></div>
          <div><Link to={"/menu/65d19729601182037c2ce41e"}>Menu</Link></div>
          <div><Link to={"/about"}>About</Link></div>
          <div> <Link to={"/contact"}>Contact</Link></div>
        </nav>
        <div className="d-flex justify-between items-center">
          <Link to={"/cart"}>
            <i class="fa-solid fa-cart-shopping fa-2xl"></i>
            <div className='text-center absolute top-1 right-16 bg-red-500 rounded px-1 text-white'>{cartNumber.length}</div>
          </Link>
          

          <Tooltip title="Account settings">
            <IconButton
              onClick={handleClick}
              size="small"
              sx={{ mr: 2 }}
              aria-controls={open ? 'account-menu' : undefined}
              aria-haspopup="true"
              aria-expanded={open ? 'true' : undefined}
            >
              <Avatar sx={{ width: 32, height: 32 }}>M</Avatar>
            </IconButton>
          </Tooltip>


        </div>
      </div>
    </header>
    <Menu
      anchorEl={anchorEl}
      id="account-menu"
      open={open}
      onClose={handleClose}
      onClick={handleClose}

      transformOrigin={{ horizontal: 'right', vertical: 'top' }}
      anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
    >
      
       {!sessionStorage.getItem('isLogin') &&
        <MenuItem className='gap-3' onClick={handleClose}>
          <Avatar /> <Link to={"/login"}> Login </Link>
        </MenuItem>}
      
      { sessionStorage.getItem('isLogin') && 
  <MenuItem className='gap-3' onClick={logout}>
        <Avatar /> LogOut
      </MenuItem>}
    </Menu>
  </>
  )
}

export default Header