import React, { useState } from 'react';
import style from './style.module.css';
import { FaBars } from 'react-icons/fa';
import { Link } from 'react-router-dom';

function Navbar() {
 
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

 
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className={style.navbar}>
      <div className={style.nav}>
        <h1 style={{ color: 'black' }}>Podca</h1>
        <div>
          <Link to={'/add'}>
            <button className={style.add}>Add</button>
          </Link>
          <h2
            style={{ color: 'black' }}
            className={style.bar}
            onClick={toggleSidebar} 
          >
            <FaBars />
          </h2>
        </div>
      </div>

      {/* Sidebar */}
      <div className={`${style.side} ${isSidebarOpen ? style.open : ''}`}>
        <ul>
          <Link style={{textDecoration:"none"}} to=""><li >Home</li></Link>
          <Link style={{textDecoration:"none"}} to=""><li>Dropdown</li></Link>
          <Link style={{textDecoration:"none"}} to=""><li>About</li></Link>
          <Link style={{textDecoration:"none"}} to="favorites"><li>Wishlist</li></Link>
        </ul>
      </div>
    </div>
  );
}

export default Navbar;
