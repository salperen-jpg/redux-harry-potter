import React from 'react';
import { useDispatch } from 'react-redux';
import { getCharacters } from '../feature/characters/charactersSlice';

const Staff = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getCharacters('/staff'));
  }, []);
  return <div>Staff</div>;
};

export default Staff;
