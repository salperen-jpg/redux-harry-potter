import React from 'react';
import Form_1 from './Form_1';
import Form_2 from './Form_2';
import styled from 'styled-components';
import { useDispatch, useSelector } from 'react-redux';
import { openModal } from '../feature/battle/battleSlice';

const Forms = () => {
  const { wizard_2, wizard_1 } = useSelector((store) => store.battle);
  const dispatch = useDispatch();
  return (
    <Wrapper>
      <div className='section-center form-center'>
        <Form_1 />
        <Form_2 />
      </div>
      {wizard_1 && wizard_2 && (
        <button className='btn' onClick={() => dispatch(openModal())}>
          Battle
        </button>
      )}
    </Wrapper>
  );
};

const Wrapper = styled.article`
  padding: 1rem;
  .form-center {
    display: grid;
    gap: 3rem;
  }
  & > button {
    display: block;
    margin: 2rem auto;
    padding: 1rem 2rem;
  }
  @media (min-width: 800px) {
    .form-center {
      grid-template-columns: 1fr 1fr;
    }
  }
  h3 {
    text-align: center;
    color: #fff;
    margin-bottom: 1rem;
  }
`;
export default Forms;
