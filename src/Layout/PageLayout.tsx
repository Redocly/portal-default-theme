import React from 'react';
import styled from 'styled-components';

interface PageLayoutProps {
  sidebar?: React.ReactNode;
}

export function PageLayout({ sidebar, children }: React.PropsWithChildren<PageLayoutProps>) {
  return (
    <Container data-component-name="Layout/PageLayout">
      {sidebar}
      <ContentContainer>{children}</ContentContainer>
    </Container>
  );
}

const Container = styled.div`
  display: flex;
  flex-direction: row;
  min-height: calc(100vh - var(--navbar-height));
`;

const ContentContainer = styled.div`
  flex: 1 0 0;
  /*
    flex-basis is ignored for nested flex in Chrome, need to set width
    See more here: https://stackoverflow.com/a/34355447
  */
  width: 0;
  max-width: 100%;
`;
