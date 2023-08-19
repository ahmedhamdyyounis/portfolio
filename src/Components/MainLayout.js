import React, { useState, useEffect } from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';
import { motion } from 'framer-motion';
export default function MainLayout() {
  const { pathname, location } = useLocation();

  // Define section background
  const currentBackground = {
    background:
      pathname === '/'
        ? '#effbf8'
        : pathname === '/contact'
        ? '#e9f9ff'
        : 'white',
  };
  const [mousePosition, setMousePosition] = useState({ left: 0, top: 0 });
  const [mouseIn] = useState(false);
  const [leave, setLeave] = useState(false);
  const [preload, setPreload] = useState(false);
  function handleMouseMove(e) {
    setMousePosition({
      left: e.pageX,
      top: e.pageY,
      background: mouseIn ? 'red' : '',
    });
  }

  // Preloader Setup
  useEffect(() => {
    const timer = setTimeout(() => {
      setPreload(true);
    }, 3500);
    return () => clearTimeout(timer);
  }, []);

  return (
<div
      style={currentBackground}
      onMouseMove={(e) => handleMouseMove(e)}
      onMouseEnter={() => setLeave(false)}
      onMouseLeave={() => setLeave(true)}
    >
        <div className={` preloader ${preload ? 'd-none' : ''}`}>
        <div className="leftLoader"></div>
        <div className="rightLoader"></div>
      </div>
      <motion.div
        className={`border d-none d-sm-block border-2 mouse-shadow rounded-5 ${
          leave ? 'z-none' : ''
        }`}
        style={mousePosition}
      ></motion.div>
      <Header />
      <Sidebar />
<Outlet context={{ location }} />
    </div>  );
}

/*

      
      
*/