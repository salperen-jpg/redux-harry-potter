import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import Character from './Character';
import { closeModal } from '../feature/battle/battleSlice';
const Modal = () => {
  const { isModalOpen, winner, loser } = useSelector((store) => store.battle);
  const dispatch = useDispatch();
  useEffect(() => {
    if (isModalOpen) {
      document.documentElement.style.overflow = 'hidden';
    }
  }, [isModalOpen]);

  return (
    <Wrapper>
      <div className={isModalOpen ? 'modal-container show' : 'modal-container'}>
        <div className='content'>
          <button className='close-btn' onClick={() => dispatch(closeModal())}>
            <AiOutlineClose className='icon' />
          </button>

          {winner && loser && (
            <div className='chars'>
              <Character {...winner} winner modal />
              <Character {...loser} loser modal />
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
    background: rgba(0, 0, 0, 0.3);
    display: grid;
    place-items: center;
    z-index: -3;
    opacity: 0;

    .content {
      padding: 3rem;
      padding-top: 4rem;
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
    font-size: 2.7rem;
    color: red;
    transition: all 0.3s linear;
    z-index: 3;
  }
  .close-btn:hover {
    color: orange;
    transform: rotate(90deg);
  }
  .close-btn:hover .icon {
    transform: rotateX('360deg');
  }
  .info {
    max-width: 18rem;
    margin: 0 auto;
  }
  @media (min-width: 800px) {
    .chars {
      height: 100%;
      display: grid;
      align-items: center;
      grid-template-columns: 1fr 1fr;
      gap: 3rem;
    }
    img {
      height: 23rem;
    }
  }
`;

export default Modal;
