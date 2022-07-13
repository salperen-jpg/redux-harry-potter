import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { AiOutlineClose } from 'react-icons/ai';
import Character from './Character';
const Modal = () => {
  const { isModalOpen, winner, loser } = useSelector((store) => store.battle);

  return (
    <Wrapper>
      <div className={isModalOpen ? 'modal-container show' : 'modal-container'}>
        <div className='content'>
          <button>
            <AiOutlineClose />
          </button>

          {winner && loser && (
            <div className='chars'>
              <Character {...winner} />
              <Character {...loser} />
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
      padding: 3rem;
      width: 90vw;
      max-width: 60rem;
      background-color: #fff;
      color: gray;
    }
  }
  .show {
    z-index: 9999;
    opacity: 1;
  }
`;

export default Modal;
