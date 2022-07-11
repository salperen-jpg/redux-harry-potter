import React from 'react';
import styled from 'styled-components';
import landing from '../assets/home-img.jpg';
import { Link } from 'react-router-dom';
const Home = () => {
  return (
    <Wrapper>
      <div className='banner'>
        <h1>This page created for Potterheads</h1>
        <Link to='/characters' className='btn link-btn'>
          See Characters
        </Link>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.header`
  height: 100vh;
  background: linear-gradient(rgba(0, 0, 0, 0.1), rgba(0, 0, 0, 0.2)),
    url(${landing}) center/cover no-repeat;
  display: grid;
  place-items: center;
  color: #fff;
  .banner {
    padding: 0 2rem;
    text-align: center;
    h1 {
      font-family: var(--secondary-font);
      margin-bottom: 2rem;
      letter-spacing: var(--spacing);
    }
  }
  @media (min-width: 800px) {
    h1 {
      max-width: 40rem;
      margin: 0 auto;
    }
  }
`;

export default Home;
