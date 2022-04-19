import React from '@portal/react';
import { ItemState } from '@portal/Sidebar/types';
import { BackButton } from '@theme/Sidebar/BackButton';
import styled, { keyframes } from '@portal/styled-components';
import { DrilldownMenuItem } from '@theme/Sidebar/DrilldownMenuItem';

export interface DrilldownMenuProps {
  back: () => void;
  item: ItemState;
  prevActiveItem?: ItemState;
}

export function DrilldownMenu({
  item,
  back,
  prevActiveItem,
  children,
}: React.PropsWithChildren<DrilldownMenuProps>) {
  return (
    <MenuContainer data-component-name="Sidebar/DrilldownMenu">
      <MenuContent>
        <MenuWrapper>
          <BackButton back={back}>{prevActiveItem?.label || 'Back'}</BackButton>
          <DrilldownMenuItem item={item} />
        </MenuWrapper>

        {children}
      </MenuContent>
    </MenuContainer>
  );
}

const MenuContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100%;
  z-index: 100;
  background-color: var(--sidebar-background-color);
`;

const slideInAnimation = keyframes`
  0% {
    transform: translateX(100%)
  }
  100% {
    transform: translateX(0%)
  }
`;

const MenuContent = styled.div`
  animation-name: ${slideInAnimation};
  animation-fill-mode: forwards;
  animation-duration: 0.3s;
  animation-timing-function: ease;
  background-color: transparent;
`;

const MenuWrapper = styled.div`
  padding: var(--sidebar-spacing-padding-vertical) var(--sidebar-spacing-padding-horizontal);
  margin-bottom: calc(var(--sidebar-spacing-unit) * 3);
  word-break: break-word;
`;
