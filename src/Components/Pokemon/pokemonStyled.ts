import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled(NavLink)`
  &:visited {
    color: blue;
  }

  width: 15rem;
  .img {
    width: 100%;

    display: flex;
    justify-content: center;
    align-items: center;
    img {
      object-fit: contain;
    }
  }
`;
