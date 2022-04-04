import React from '@portal/react';

interface LayoutConfig {
  navbar: React.ReactNode;
  footer: React.ReactNode;
}

export function Layout({ navbar, footer, children }: React.PropsWithChildren<LayoutConfig>) {
  return (
    <>
      {navbar}
      {children}
      {footer}
    </>
  );
}
