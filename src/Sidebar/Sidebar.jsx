import React, { useState } from 'react'
import './Sidebar.css'
import { FaDropbox,FaSearch, FaRegHeart, FaRegBell, FaChartPie, FaRegMoon  } from "react-icons/fa";
import { RiArrowRightDoubleFill } from "react-icons/ri";
import { IoHome, IoBarChartOutline, IoSunnyOutline } from "react-icons/io5";
import { GiWallet } from "react-icons/gi";
import { IoMdLogOut } from "react-icons/io";

const Sidebar = () => {
    const [dark, setDark] = useState(false);
    const [narrow, setNarrrow] = useState(false);

    const body = document.querySelector("body");

    const searchHandler = () =>{
        setNarrrow(false);
    }

    const NarrowHandler = () => {
        if(narrow === false){
            setNarrrow(true)
        }
        else{
            setNarrrow(false)
        }
    }

    const DarkHandler = () => {
        body.classList.toggle("dark");
        
        if(body.classList.contains("dark")){
            setDark(true)
        }
        else{ 
            setDark(false)
        }
    }

  return (
    <nav className={narrow ? 'sidebar close' : 'sidebar'}>
        <header>
            <div className="image-text">
                <span className='image'>
                    <FaDropbox className='dropBox'/>
                </span>

                <div className="text header-text">
                    <span className='name'>CodingLab</span>
                    <span className='profession'>Web developer</span>
                </div>
            </div>

            <RiArrowRightDoubleFill onClick={() => NarrowHandler()} className='toggle'/>
        </header>

        <div className="menu-bar">
            <div className="menu">
                <li className='search-box'>
                    <FaSearch className='icon' onClick={() => searchHandler()}/>
                    <input type="text" placeholder='Search...' />
                </li> 
                <ul className='-menu-links'>
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <IoHome className='icon'/>
                            <span className='text nav-text'>Dashboard</span>
                        </a>
                    </li>  
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <IoBarChartOutline  className='icon'/>
                            <span className='text nav-text'>Revenue</span>
                        </a>
                    </li>
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <FaRegBell className='icon'/>
                            <span className='text nav-text'>Notifications</span>
                        </a>
                    </li>
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <FaChartPie  className='icon'/>
                            <span className='text nav-text'>Analytics</span>
                        </a>
                    </li>
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <FaRegHeart className='icon'/>
                            <span className='text nav-text'>Likes</span>
                        </a>
                    </li>
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <GiWallet  className='icon'/>
                            <span className='text nav-text'>Wallets</span>
                        </a>
                    </li> 
                </ul>
            </div>

            <div className="bottom-content">
                <li className=''>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        <IoMdLogOut className='icon'/>
                        <span className='text nav-text'>Logout</span>
                    </a>
                </li> 

                <li className='mode'>
                    <div className='moon-sun'>
                        <FaRegMoon className='icon moon' style={ dark ? {display : "none"} : {display : "block"}}/>
                        <IoSunnyOutline className='icon sun' style={ dark ? {display : "block"} : {display : "none"}}/>
                    </div>
                    <span className="mode-text text">{dark ? "Light Mode" : "Dark Mode"}</span>

                    <div className='toggle-switch' onClick={() => DarkHandler()}>
                        <span className='switch'></span>
                    </div>
                </li> 
            </div>
        </div>
    </nav>
  )
}

export default Sidebar