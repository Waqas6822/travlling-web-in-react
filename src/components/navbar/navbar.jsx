import React, { useState } from 'react'
import './navbar.css'
import {MdOutlineTravelExplore} from 'react-icons/md'
import {AiFillCloseCircle} from 'react-icons/ai'
import {TbGridDots} from 'react-icons/tb'

const Navbar = () => {
  const [active ,setActive]=useState('navBar')
  const showNav=()=>{
    setActive("navBar activeNavbar")
  }
  const removeNav=()=>{
    setActive("navBar")
  }


  return (
    <section className="navBarSection">
      <header className="header flex">
        <div className="logoDiv">
          <a href="#" className="logo flex">
            <h1><MdOutlineTravelExplore className='icon'/>Travel.</h1>
            </a>
        </div>

        <div className={active}>
          <ul className="navLists flex">
            <li className="navItems">
              <a href="#" className="navLink">Home</a>
            </li>
            <li className="navItems">
            <a href="#" className="navLink">Packeges</a>
            </li>
            <li className="navItems">
            <a href="#" className="navLink">Shop</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">About</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">Pages</a>
            </li>
            <li className="navItems">
            <a href="#" className="navLink">News</a>
            </li>
            <li className="navItems">
              <a href="#" className="navLink">Contact</a>
            </li>
            <button className="btn">
              <a href="#">BOOK NOW</a>
            </button>
          </ul>
          < div onClick={removeNav} className="closeNavBar">
          <AiFillCloseCircle className="icon close"/>
          </div>
        </div>

        <div onClick={showNav} className="toggleNavbar">
          <TbGridDots className='icon open'/>
        </div>



      </header>
    </section>
  )
}

export default Navbar