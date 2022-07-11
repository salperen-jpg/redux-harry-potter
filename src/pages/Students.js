import React from 'react';
import { useDispatch } from 'react-redux';
import { getCharacters } from '../feature/characters/charactersSlice';
const Students = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCharacters('/students'));
  }, []);
  return <div>Students</div>;
};

export default Students;
