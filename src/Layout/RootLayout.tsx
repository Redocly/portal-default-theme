import React from '@portal/react';
import styled from '@portal/styled-components';

interface LayoutConfig {
  navbar: React.ReactNode;
  footer: React.ReactNode;
}

export function RootLayout({ navbar, footer, children }: React.PropsWithChildren<LayoutConfig>) {
  return (
    <Wrapper data-component-name="Layout/RootLayout">
      {navbar}
      {children}
      {footer}
    </Wrapper>
  );
}

const Wrapper = styled.div``
