import styled from 'styled-components';

export const Menu = styled.ul.attrs(() => ({
  'data-component-name': 'Sidebar/Menu'
}))`
  padding: 0;
  margin: 0;
  list-style: none;
  color: var(--sidebar-text-color);
  position: relative;
`;
