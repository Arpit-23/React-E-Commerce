import React from 'react'
import { FaShoppingCart } from "react-icons/fa";
import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png'
import { useSelector } from 'react-redux'

function Navbar() {

    const {cart} = useSelector((state) => state);

  return (
    <div className='flex justify-between items-center h-20 max-w-6xl mx-auto'>
        <NavLink to='/'>
            <div className='ml-5'>
                <img src={logo} className='h-14'></img>
            </div>
        </NavLink>
        <div className='flex items-center font-medium text-slate-100 mr-5 space-x-6'>
            <NavLink to='/'>
                <p>Home</p>
            </NavLink>
            <NavLink to='/cart'>
                <div className='relative '>
                    <FaShoppingCart className='text-2xl' />
                    {
                        cart.length>0 &&
                        <span
                        className='absolute -top-1 -right-2 rounded-full text-xs animate-bounce bg-green-500 text-white flex justify-center items-center h-5 w-5'
                        >{cart.length}</span>
                    }
                </div>
            </NavLink>
        </div>
    </div>
  )
}

export default Navbar