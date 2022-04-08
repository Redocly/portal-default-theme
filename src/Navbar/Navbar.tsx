import React from '@portal/react';
import styled from '@portal/styled-components';
import { mediaQueries } from '@portal/media-css';

interface NavbarProps {
  menu: React.ReactNode;
  logo: React.ReactNode;
  searchBar: React.ReactNode;
}

export default function Navbar({ menu, logo, searchBar }: NavbarProps) {
  return (
    <NavbarContainer>
      {logo}
      {menu}
      {searchBar}
    </NavbarContainer>
  );
}

export const NavbarContainer = styled.nav`
  height: var(--navbar-height);
  box-sizing: border-box;
  display: flex;
  color: var(--navbar-color-text);
  align-items: center;
  justify-content: space-between;
  flex-shrink: 0;

  font-size: 0.875rem;
  position: sticky;
  top: 0;
  z-index: 200;
  padding: 1.25rem;
  padding: 10px var(--sidebar-margin-left);
  background: var(--navbar-color-background);
  font-family: var(--font-family-h);

  ${mediaQueries.medium} {
    padding: 10px var(--sidebar-margin-left);
  }

  ${mediaQueries.medium} {
    font-size: 1rem;
  }

  ${mediaQueries.print} {
    background: transparent;
    display: none;

    > :not(a, img) {
      display: none !important;
    }
    img {
      padding: 0;
      margin: 0;
    }
  }
`;
