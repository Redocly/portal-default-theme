import React from 'react';
import styled from 'styled-components';

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
