import React from '@portal/react';
import styled from '@portal/styled-components';

export function SeparatorLine() {
  return <Wrapper data-component-name="Sidebar/SeparatorLine"></Wrapper>
}

const Wrapper = styled.div`
  height: 1px;
  background-color: var(--sidebar-separator-line-color);
  margin: var(--sidebar-spacing-padding-vertical) 0;
`;
