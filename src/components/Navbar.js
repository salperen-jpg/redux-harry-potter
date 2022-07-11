import React from 'react';
import { Link } from 'react-router-dom';
const Navbar = () => {
  return (
    <nav>
      <div className='nav-center'>
        <Link to='/characters'>Characters</Link>
        <Link to='/characters/staffs'>Staffs</Link>
        <Link to='/characters/students'>Students</Link>
      </div>
    </nav>
  );
};

export default Navbar;
