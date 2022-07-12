import React from 'react';
import styled from 'styled-components';
import logo from '../assets/potter.png';

const Loading = () => {
  return (
    <Wrapper className='page-full'>
      <div className='outer-container loading'></div>
      <div className='inner-container loading'></div>
      <img src={logo} alt='' />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: grid;
  place-items: center;
  .loading {
    border: 2px solid transparent;
    border-radius: 50%;
  }
  .outer-container {
    width: 10rem;
    height: 10rem;
    border-top-color: #7f0909;
    animation: spin 1s linear infinite;
  }

  .inner-container {
    position: absolute;
    width: 8rem;
    height: 8rem;
    border-top-color: #ffc500;
    animation: spinner 1s linear infinite;
  }
  img {
    width: 6rem;
    position: absolute;
    z-index: 99;
  }
  @keyframes spin {
    to {
      transform: rotate(360deg);
    }
  }
  @keyframes spinner {
    to {
      transform: rotate(-360deg);
    }
  }
`;

export default Loading;
