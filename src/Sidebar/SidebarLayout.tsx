import React from '@portal/react';
import styled from '@portal/styled-components';
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
    <>
      <MobileSidebarButton opened={isOpen} onClick={toggleMenu} />

      <Sidebar animate={true} opened={isOpen}>
        {versions}
        <MenuContainer>{menu}</MenuContainer>
      </Sidebar>
    </>
  );
}

export const MenuContainer = styled.div`
  position: relative;
  overflow-y: auto;
  flex-grow: 1;
  padding-top: var(--sidebar-spacing-offset-top);
`;
