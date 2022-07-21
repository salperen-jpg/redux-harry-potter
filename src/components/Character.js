import React from 'react';
import styled from 'styled-components';
import { GiMagicBroom, GiMagicGate } from 'react-icons/gi';
import { FaHatWizard } from 'react-icons/fa';

const defaultImage =
  'https://img.freepik.com/premium-vector/old-wizard-esport-logo-illustration_224764-37.jpg?w=2000';

const Character = ({
  modal,
  image,
  name,
  patronus,
  actor,
  dateOfBirth,
  house,
  wand: { wood },
}) => {
  return (
    <Wrapper>
      <img src={image || defaultImage} alt='' />

      <p className='name'>
        <FaHatWizard className={`icon name-icon`} />
        {name}
      </p>
      <div className='info'>
        <div>
          <span>Actor : </span>
          <span className='att'>{actor}</span>
        </div>
        {!modal && (
          <>
            {' '}
            <div>
              <span> Wood : </span>
              <span className='att'>{wood || 'Unknown'}</span>
            </div>
            <div>
              <span>House : </span>
              <span>
                <span className={`box ${house}`}></span>
              </span>
            </div>
            <button className='btn detail'>learn more</button>{' '}
          </>
        )}
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.article`
  position: relative;
  color: #102a42;

  .image-container {
    position: relative;
  }
  img {
    max-height: 18rem;
    object-fit: cover;
    border-radius: 56% 44% 73% 27% / 45% 65% 32% 55%;
    transition: all 0.3s ease-in-out;
  }
  img:hover {
    border-radius: 79% 21% 29% 71% / 11% 74% 26% 89%;
  }
  .name {
    text-align: center;
    margin: 0.5rem 0;
  }
  .name-icon {
    margin-right: 0.5rem;
  }
  .info {
    padding: 1rem 1rem;
    div > span {
      color: red;
      text-transform: capitalize;
    }
    div {
      margin-bottom: 0.5rem;
      display: grid;
      grid-template-columns: 1fr 2fr;
    }
    .att {
      color: #102a42;
    }
  }
  .icon {
    font-size: 1.5rem;
  }

  .box {
    display: inline-block;
    width: 1.5rem;
    height: 1.5rem;
    background-color: black;
    border-radius: 50%;
  }
  .Gryffindor {
    background: linear-gradient(to left, #7f0909 50%, #ffc500 50%);
  }
  .Slytherin {
    background: linear-gradient(to left, darkgreen 50%, #fff 50%);
  }
  .Hufflepuff {
    background: linear-gradient(to left, yellow 50%, #fff 50%);
  }
  .Ravenclaw {
    background: linear-gradient(to left, blue 50%, #fff 50%);
  }

  .detail {
    display: block;
    margin: 0.3rem auto;
  }

  .overlay {
    position: absolute;
    top: 0;
    z-index: -1;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 32px;
    opacity: 0.64;
    mix-blend-mode: overlay;
    background: rgb(245, 245, 245);
    background: linear-gradient(
      180deg,
      rgba(245, 245, 245, 0.9136029411764706) 0%,
      rgba(249, 249, 249, 0.7679446778711485) 22%,
      rgba(255, 255, 255, 0.3309698879551821) 53%,
      rgba(255, 255, 255, 0) 100%
    );
  }
`;

export default Character;
