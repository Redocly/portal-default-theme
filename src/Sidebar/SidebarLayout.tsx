import React from 'react';
import styled from 'styled-components';
import { Sidebar } from '@theme/Sidebar/Sidebar';
import { useMobileMenu } from '@portal/useMobileMenu';
import { MobileSidebarButton } from '@theme/Sidebar/MobileSidebarButton';

interface SidebarLayoutProps {
  versions: React.ReactNode;
  menu: React.ReactNode;
}

export function SidebarLayout({ versions, menu }: SidebarLayoutProps) {
  const [isOpen, setIsOpen] = useMobileMenu();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Wrapper data-component-name="Sidebar/SidebarLayout">
      <MobileSidebarButton opened={isOpen} onClick={toggleMenu} />

      <Sidebar animate={true} opened={isOpen}>
        {versions}
        <MenuContainer>{menu}</MenuContainer>
      </Sidebar>
    </Wrapper>
  );
}

const Wrapper = styled.div``;

export const MenuContainer = styled.div`
  position: relative;
  overflow-y: auto;
  flex-grow: 1;
  padding-top: var(--sidebar-spacing-offset-top);
`;
