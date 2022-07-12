import React from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
const Navbar = () => {
  const { pathname } = useLocation();

  return (
    <Wrapper>
      <div className='nav-center'>
        <h3 className='logo'>
          Potter<span>Head</span>
        </h3>
        <div>
          <NavLink
            to='/characters'
            className={pathname === '/characters' ? 'active' : 'link'}
          >
            Characters
          </NavLink>

          <NavLink
            to='/characters/staffs'
            className={({ isActive }) => (isActive ? 'active' : 'link')}
          >
            Staffs
          </NavLink>
          <NavLink
            to='/characters/students'
            className={({ isActive }) => (isActive ? ' active' : 'link')}
          >
            Students
          </NavLink>
          <NavLink
            to='/characters/battle'
            className={({ isActive }) => (isActive ? ' active' : 'link')}
          >
            Battle
          </NavLink>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.nav`
  height: 8rem;
  display: flex;
  align-items: center;
  .nav-center {
    width: min(90vw, 1200px);
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    .logo {
      span {
        color: #fad124;
      }
    }
    div {
      display: flex;
      gap: 0.5rem;
    }
  }
  .active {
    color: pink;
  }

  .link {
    color: black;
  }
`;
export default Navbar;
