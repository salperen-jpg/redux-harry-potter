import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Forms from '../components/Forms';
import Modal from '../components/Modal';
import { getAllChars } from '../feature/battle/battleSlice';

const Battle = () => {
  const dispatch = useDispatch();
  React.useEffect(() => {
    dispatch(getAllChars());
  }, []);
  return (
    <div>
      <Forms />
      <Modal />
    </div>
  );
};

export default Battle;
