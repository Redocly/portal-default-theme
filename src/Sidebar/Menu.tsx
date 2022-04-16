import React from '@portal/react';
import styled from '@portal/styled-components';

export function Menu({ children }) {
  return <Wrapper data-component-name="Sidebar/Menu">{children}</Wrapper>
}

const Wrapper = styled.ul`
  padding: 0;
  margin: 0;
  list-style: none;
  color: var(--sidebar-text-color);
  position: relative;
`;
