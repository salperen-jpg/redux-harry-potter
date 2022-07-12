import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getCharacters } from '../feature/characters/charactersSlice';
import styled from 'styled-components';
import Character from '../components/Character';
import Loading from '../components/Loading';
const Staff = () => {
  const dispatch = useDispatch();
  const { characters, isLoading } = useSelector((store) => store.character);

  React.useEffect(() => {
    dispatch(getCharacters('/staff'));
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

const Wrapper = styled.header`
  padding: 5rem 0;

  .char-center {
    display: grid;
    gap: 2rem;
    grid-template-columns: repeat(auto-fill, minmax(276px, 1fr));
  }
`;
export default Staff;
