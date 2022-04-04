import React from '@portal/react';
import styled from '@portal/styled-components';
import { ArrowBack } from '@theme/Sidebar/ArrowBack';

interface BackButtonProps {
  back: () => void;
}

export function BackButton({ children, back }: React.PropsWithChildren<BackButtonProps>) {
  return (
    <Button onClick={back}>
      <ArrowBack />
      {children}
    </Button>
  );
}

const Button = styled.button`
  width: 100%;
  background-color: transparent;
  padding: 0;
  border: 0;
  outline: 0;
  color: var(--color-secondary-contrast);
  display: flex;
  align-items: center;
  cursor: pointer;
  font-size: var(--sidebar-font-size);
  transition: color 0.25s ease;
  text-align: left;
  margin-bottom: calc(var(--sidebar-spacing-padding-vertical) * 3);

  svg {
    margin-right: calc(var(--sidebar-spacing-unit) * 1.5);
  }

  &:hover {
    color: var(--sidebar-text-color);
  }
`;
