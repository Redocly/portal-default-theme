import React from '@portal/react';
import { MenuItemProps } from '@portal/Sidebar/types';
import { MenuLinkItem } from '@theme/Sidebar/MenuLinkItem';
import { ExternalIcon } from '@theme/Sidebar/ExternalIcon';
import { MenuItemLabel } from '@theme/Sidebar/MenuItemLabel';
import { SeparatorLine } from '@theme/Sidebar/SeparatorLine';

export function MenuItem({ item }: MenuItemProps) {
  return (
    <>
      <MenuLinkItem item={item}>
        <MenuItemLabel active={item.active}>
          {item.label}
          {item.external ? <ExternalIcon /> : null}
        </MenuItemLabel>
      </MenuLinkItem>

      {item.separatorLine ? <SeparatorLine /> : null}
    </>
  );
}
