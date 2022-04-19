import React from '@portal/react';
import styled from '@portal/styled-components';
import { MenuLink } from '@theme/Sidebar/MenuLink';
import { MenuItemProps } from '@portal/Sidebar/types';

export function MenuLinkItem({ item, children }: React.PropsWithChildren<MenuItemProps>) {
  return (
    <Wrapper data-component-name="Sidebar/MenuLinkItem">
      {item.link ? (
        <MenuLink to={item.link} {...item}>
          {children}
        </MenuLink>
      ) : (
        children
      )}
    </Wrapper>
  );
}

const Wrapper = styled.span``;
