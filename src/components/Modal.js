import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import Character from './Character';
const Modal = () => {
  const { isModalOpen, winner, loser } = useSelector((store) => store.battle);

  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflow = 'hidden';
    }
  }, [isModalOpen]);

  return (
    <Wrapper>
      <div className={isModalOpen ? 'modal-container show' : 'modal-container'}>
        <div className='content'>
          <button className='close-btn'>
            <AiOutlineClose className='icon' />
          </button>

          {winner && loser && (
            <div className='chars'>
              <Character {...winner} modal />
              <Character {...loser} modal />
            </div>
          )}
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  .modal-container {
    position: fixed;
    inset: 0;
    background: rgba(0, 0, 0, 0.1);
    display: grid;
    place-items: center;
    z-index: -3;
    opacity: 0;

    .content {
      padding: 2rem;
      width: 90vw;
      height: 90vh;
      max-width: 60rem;
      background-color: #fff;
      color: gray;
      position: relative;
    }
  }
  .show {
    z-index: 9999;
    opacity: 1;
    overflow-y: hidden;
  }
  img {
    max-height: 15rem;
    width: 15rem;
    margin: 0 auto;
  }
  .close-btn {
    position: absolute;
    top: 2rem;
    right: 2rem;
    background-color: transparent;
    border: none;
    font-size: 2rem;
    color: red;
    transition: all 0.3s linear;
    z-index: 3;
  }
  .close-btn:hover {
    color: orange;
    transform: rotateX('180deg');
  }
  .close-btn:hover .icon {
    transform: rotateX('360deg');
  }
`;

export default Modal;
