import React from '@portal/react';
import styled from '@portal/styled-components';
import { MenuItemProps } from '@portal/Sidebar/types';

export function DrilldownMenuItem({ item }: MenuItemProps) {
  return (
    <Container data-component-name="Sidebar/DrilldownMenuItem">
      {item.icon ? <Icon src={item.icon} /> : null}
      <div>
        {item.label}
        {item.sublabel ? <Sublabel>{item.sublabel}</Sublabel> : null}
      </div>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  align-items: center;
  color: var(--sidebar-text-color);
  font-size: var(--sidebar-font-size);
  font-weight: var(--font-weight-bold);
`;

const Icon = styled.img`
  width: calc(var(--sidebar-spacing-unit) * 4);
  height: calc(var(--sidebar-spacing-unit) * 4);
  margin-right: var(--sidebar-spacing-unit);
  border-radius: 50%;
  flex-shrink: 0;
  overflow: hidden;
`;

const Sublabel = styled.div`
  margin-top: 2px;
  font-size: 0.85rem;
  color: var(--color-secondary-contrast);
  font-weight: var(--font-weight-regular);
`;
