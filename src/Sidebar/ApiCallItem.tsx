import React from '@portal/react';
import styled from '@portal/styled-components';
import { MenuItemProps } from '@portal/Sidebar/types';
import { OperationBadge } from '@redocly/reference-docs';
import { MenuLinkItem } from '@theme/Sidebar/MenuLinkItem';
import { SeparatorLine } from '@theme/Sidebar/SeparatorLine';
import { MenuItemLabel } from '@theme/Sidebar/MenuItemLabel';


export function ApiCallItem({ item }: MenuItemProps) {
  return (
    <>
      <MenuLinkItem item={item}>
        <MenuItemLabel active={item.active}>
          <Badge type={item.httpVerb}>{item.httpVerb === 'hook' ? 'event' : item.httpVerb}</Badge>
          {item.label}
        </MenuItemLabel>
      </MenuLinkItem>

      {item.separatorLine ? <SeparatorLine /> : null}
    </>
  );
}

export const Badge = styled(OperationBadge)`
  flex-shrink: 0;
  margin-top: 0;
`;
