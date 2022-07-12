import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWizard_2 } from '../feature/battle/battleSlice';

const Form_2 = () => {
  const dispatch = useDispatch();
  const { wizard_2, isLoading_2, characters } = useSelector(
    (store) => store.battle
  );

  return (
    <div>
      <h3>Wizard 2</h3>
      <form>
        <select
          name='wizard_2'
          defaultValue={'select value'}
          id='wizard_2'
          onChange={(e) => {
            dispatch(setWizard_2(e.target.value));
          }}
        >
          <option disabled value='select value'>
            Select value
          </option>
          {characters.map((char, index) => {
            return (
              <option value={char.name} key={index}>
                {char.name}
              </option>
            );
          })}
        </select>
      </form>
      {wizard_2 && <img className='battle-img' src={wizard_2.image} />}
    </div>
  );
};

export default Form_2;
