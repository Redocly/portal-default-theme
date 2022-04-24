import React from 'react';
import styled from 'styled-components';
import { mediaQueries } from '@portal/media-css';
import { NavbarItem } from '@theme/Navbar/NavbarItem';

export default function NavbarMenu({ menuItems }) {
  if (!menuItems || !menuItems.length) {
    return null;
  }

  return (
    <NavItemsContainer data-component-name="Navbar/NavbarMenu">
      {menuItems.map((navItem, index) => {
        return <NavbarItem key={index} data-cy={navItem.label} navItem={navItem} />;
      })}
    </NavItemsContainer>
  );
}

const NavItemsContainer = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: none;

  ${mediaQueries.small} {
    display: block;
  }
`;
