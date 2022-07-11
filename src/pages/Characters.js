import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getCharacters } from '../feature/characters/charactersSlice';
const Characters = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getCharacters());
  }, []);
  return <div>Characters</div>;
};

export default Characters;
