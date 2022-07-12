import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../components/Navbar';
import main from '../assets/home-img.jpg';
import styled from 'styled-components';

const SharedLayout = () => {
  return (
    <Wrapper>
      <Navbar />
      <Outlet />
    </Wrapper>
  );
};
const Wrapper = styled.main`
  min-height: 100vh;
  background: url(${main}) center/cover no-repeat;
`;

export default SharedLayout;
