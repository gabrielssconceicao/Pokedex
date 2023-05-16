import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled(NavLink)`
  &:visited {
    color: #000;
  }

  width: 15rem;
  height: 15rem;
  background-color: #fff;

  display: flex;
  flex-direction: column;

  border-radius: 1rem 1rem 0 0;
  color: #000;

  .img {
    border-radius: inherit;
    width: 100%;
    height: 70%;
    display: flex;
    justify-content: center;
    align-items: center;
    border-bottom: 2px solid #000;
    img {
      object-fit: contain;
    }
  }

  .types {
    height: 15%;
    display: flex;
    gap: 2rem;
    flex-direction: row;
    align-items: center;
  }
`;
