import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Forms from '../components/Forms';
import { getAllChars } from '../feature/battle/battleSlice';

const Battle = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllChars());
  }, []);
  return (
    <div>
      <Forms />
    </div>
  );
};

export default Battle;
