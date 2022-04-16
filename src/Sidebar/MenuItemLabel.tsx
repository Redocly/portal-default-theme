import React from '@portal/react';
import styled from '@portal/styled-components';

export function MenuItemLabel({ active, children }) {
  return <Wrapper active={active} data-component-name="Sidebar/MenuItemLabel">{children}</Wrapper>
}

const Wrapper = styled.li<{ active?: boolean }>`
  display: flex;
  align-items: center;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  word-break: break-word;
  margin-bottom: 1px;

  font-family: var(--sidebar-font-family);
  font-size: var(--sidebar-font-size);
  font-weight: var(--font-weight-regular);
  margin-left: var(--sidebar-spacing-offset-left);
  padding: var(--sidebar-spacing-padding-vertical) var(--sidebar-spacing-padding-horizontal);
  padding-left: calc(
    var(--sidebar-spacing-padding-horizontal) + var(--sidebar-chevron-size) +
      var(--sidebar-spacing-unit) * 0.5
  );
  border-top-left-radius: var(--sidebar-border-radius);
  border-bottom-left-radius: var(--sidebar-border-radius);

  ${props =>
    props.active
      ? `
    color: var(--sidebar-text-active-color);
    background-color: var(--sidebar-text-active-background-color);
  `
      : null};

  :hover {
    color: var(--sidebar-text-active-color);
    background-color: var(--sidebar-text-active-background-color);
  }

  :empty {
    padding: 0;
  }
`;
