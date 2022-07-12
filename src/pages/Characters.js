import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../feature/characters/charactersSlice';
import styled from 'styled-components';
import Character from '../components/Character';
import Loading from '../components/Loading';

const Characters = () => {
  const { characters, isLoading } = useSelector((store) => store.character);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getCharacters());
  }, []);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <Wrapper>
      <div className='section-center char-center'>
        {characters.slice(0, 12).map((char, index) => {
          return <Character key={index} {...char} />;
        })}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  padding: 5rem 0;

  .char-center {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
  }
`;

export default Characters;
