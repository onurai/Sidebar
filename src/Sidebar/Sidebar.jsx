import React, { useState } from 'react'
import './Sidebar.css'
import { FaRegMoon, FaUserSecret } from "react-icons/fa";
import { IoHome, IoSunnyOutline } from "react-icons/io5";
import { IoMdLogOut } from "react-icons/io";
import { RxDashboard } from "react-icons/rx";
import { SiTourbox } from "react-icons/si";
import { FaUserTie, FaCommentDots } from "react-icons/fa6";
import { FcSalesPerformance } from "react-icons/fc";
import { IoMdLogIn } from "react-icons/io";

const Sidebar = () => {
    const [dark, setDark] = useState(false);
    const [narrow, setNarrrow] = useState(false);

    const body = document.querySelector("body");

    const NarrowHandler = () => {
        setNarrrow(!narrow);
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
                    <RxDashboard onClick={NarrowHandler} size={30} className='dropBox'/>
                </span>

                <div className="text header-text">
                    <span className='name'>Admin</span>
                    <span className='profession'>Dashboard</span>
                </div>
            </div>
        </header>

        <div className="menu-bar">
            <div className="menu">
                <ul className='-menu-links'>
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <IoMdLogIn size={25} className='icon'/>
                            <span className='text nav-text'>Login</span>
                        </a>
                    </li>
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <IoHome className='icon'/>
                            <span className='text nav-text'>Dashboard</span>
                        </a>
                    </li>  
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <FcSalesPerformance className='icon'/>
                            <span className='text nav-text'>Orders</span>
                        </a>
                    </li>  
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <SiTourbox className='icon'/>
                            <span className='text nav-text'>Tours</span>
                        </a>
                    </li>
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <FaCommentDots className='icon'/>
                            <span className='text nav-text'>Tour Comments</span>
                        </a>
                    </li>
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <FaUserTie className='icon'/>
                            <span className='text nav-text'>Users</span>
                        </a>
                    </li>
                    <li className='nav-link'>
                        <a href="#" onClick={(e) => e.preventDefault()}>
                            <FaUserSecret className='icon'/>
                            <span className='text nav-text'>User Role</span>
                        </a>
                    </li>
                </ul>
            </div>

            <div className="bottom-content">
                <li className=''>
                    <a href="#" onClick={(e) => e.preventDefault()}>
                        <IoMdLogOut size={23} className='icon'/>
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