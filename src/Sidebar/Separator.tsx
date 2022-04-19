import React from '@portal/react';
import styled from '@portal/styled-components';
import { MenuItemProps } from '@portal/Sidebar/types';
import { SeparatorLine } from '@theme/Sidebar/SeparatorLine';
import { MenuItemLabel } from '@theme/Sidebar/MenuItemLabel';

export function Separator({ item }: MenuItemProps) {
  return (
    <Wrapper data-component-name="Sidebar/Separator">
      <SeparatorItem>{item.label}</SeparatorItem>
      {item.separatorLine ? <SeparatorLine /> : null}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export const SeparatorItem = styled(MenuItemLabel)`
  cursor: default;
  font-weight: var(--font-weight-bold);
  color: var(--sidebar-separator-label-color);

  :hover {
    color: inherit;
    background-color: inherit;
  }
`;
