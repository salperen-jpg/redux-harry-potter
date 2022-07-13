import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setWizard_1 } from '../feature/battle/battleSlice';

const Form_1 = () => {
  const dispatch = useDispatch();
  const { wizard_1, characters } = useSelector((store) => store.battle);

  return (
    <div>
      <h3>Wizard 1</h3>
      <form>
        <select
          name='wizard_1'
          defaultValue={'select value'}
          value={wizard_1.name}
          id='wizard_1'
          onChange={(e) => {
            dispatch(setWizard_1(e.target.value));
          }}
        >
          <option disabled value='select value'>
            Select wizard
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
      {wizard_1 && <img className='battle-img' src={wizard_1.image} />}
    </div>
  );
};

export default Form_1;
