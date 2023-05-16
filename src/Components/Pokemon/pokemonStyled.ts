import { NavLink } from 'react-router-dom';

import styled from 'styled-components';

export const Container = styled(NavLink)`
  &:visited {
    color: blue;
  }
`;

export const TypeDiv = styled.div`
  flex: 1;
  text-align: 'center';
`;
