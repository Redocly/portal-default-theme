import React from 'react';
import styled from 'styled-components';
import { Arrow } from '@theme/ui/Arrow/Arrow';
import { ItemState } from '@portal/Sidebar/types';
import { MenuLinkItem } from '@theme/Sidebar/MenuLinkItem';
import { MenuItemLabel } from '@theme/Sidebar/MenuItemLabel';
import { SeparatorLine } from '@theme/Sidebar/SeparatorLine';

interface MenuGroupProps {
  item: ItemState;
  isExpanded: boolean;
  toggleExpanded: () => void;
}

export function MenuGroup({
  item,
  isExpanded,
  toggleExpanded,
  children,
}: React.PropsWithChildren<MenuGroupProps>) {
  return (
    <Wrapper data-component-name="Sidebar/MenuGroup">
      <MenuLinkItem item={item}>
        <MenuGroupLabel
          onClick={toggleExpanded}
          isAlwaysExpanded={item.expanded === 'always'}
          active={item.active}
        >
          <MenuGroupArrow direction={isExpanded ? 'down' : 'right'} />
          {item.label}
        </MenuGroupLabel>
      </MenuLinkItem>

      <MenuWrapper>{isExpanded ? children : null}</MenuWrapper>

      {item.separatorLine ? <SeparatorLine /> : null}
    </Wrapper>
  );
}

const Wrapper = styled.div``;

const MenuWrapper = styled.div`
  padding-left: var(--sidebar-spacing-offset-nesting);
`;

const MenuGroupLabel = styled(MenuItemLabel)<{ isAlwaysExpanded?: boolean }>`
  padding-left: var(--sidebar-spacing-padding-horizontal);
  cursor: ${props => (props.isAlwaysExpanded ? 'default' : 'pointer')};
`;

const MenuGroupArrow = styled(Arrow)`
  margin-right: calc(var(--sidebar-spacing-unit) / 2);
`;
