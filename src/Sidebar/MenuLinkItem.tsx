import React from '@portal/react';
import { MenuLink } from '@theme/Sidebar/MenuLink';
import { MenuItemProps } from '@portal/Sidebar/types';

export function MenuLinkItem({ item, children }: React.PropsWithChildren<MenuItemProps>) {
  return (
    <>
      {item.link ? (
        <MenuLink to={item.link} {...item}>
          {children}
        </MenuLink>
      ) : (
        children
      )}
    </>
  );
}
