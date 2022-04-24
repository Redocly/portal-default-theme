import styled from 'styled-components';

export const SeparatorLine = styled.div.attrs(() => ({
  'data-component-name': 'Sidebar/SeparatorLine'
}))`
  height: 1px;
  background-color: var(--sidebar-separator-line-color);
  margin: var(--sidebar-spacing-padding-vertical) 0;
`;
