import React from 'react';
import styled from 'styled-components';
import { useLocation } from 'react-router-dom';
import { Link } from '@portal/Link';
import { withPathPrefix } from '@portal/utils';
import type { ResolvedNavLinkItem } from '@portal/types';

interface NavbarItemProps {
  navItem: ResolvedNavLinkItem;
}

export function NavbarItem({ navItem }: NavbarItemProps) {
  const { pathname } = useLocation();
  const isActive = pathname === withPathPrefix(navItem.link);

  return (
    <NavMenuItem active={isActive} data-component-name="Navbar/NavbarItem">
      <NavLink to={navItem.link} active={isActive}>
        <NavLabel>{navItem.label}</NavLabel>
      </NavLink>
    </NavMenuItem>
  );
}

const NavMenuItem = styled.li<{ active?: boolean }>`
  display: inline-block;
  padding: 20px calc(var(--sidebar-padding-horizontal) * 2);
  text-align: center;
  line-height: 1;
  font-size: var(--navbar-item-font-size);
  margin-left: var(--navbar-item-margin-horizontal);
  margin-right: var(--navbar-item-margin-horizontal);
  border-radius: var(--navbar-item-border-radius);
  font-weight: var(--navbar-item-font-weight);
  background: ${({ active }) => (active ? 'var(--navbar-item-active-background-color)' : 'none')};
`;

const NavLink = styled(Link)`
  color: ${({ active }) =>
    active ? 'var(--navbar-item-active-text-color)' : 'var(--navbar-color-text)'};
  text-decoration: ${({ active }) =>
    active ? 'var(--navbar-item-active-text-decoration)' : 'none'};
`;

const NavLabel = styled.span`
  cursor: pointer;
  vertical-align: middle;
`;
