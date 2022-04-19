import React from '@portal/react';
import styled from '@portal/styled-components';
import type { ResolvedNavLinkItem } from '@portal/types';
import { Button } from '@theme/ui';

interface PageNavigationProps {
  prev: ResolvedNavLinkItem | null;
  next: ResolvedNavLinkItem | null;
}

export function PageNavigation({ prev, next }: PageNavigationProps) {
  return (
    <PageNavigationWrapper data-component-name="PageNavigation/PageNavigation">
      {prev && (
        <Button variant="outlined" size="large" to={prev.link}>
          Back to {prev.label}
        </Button>
      )}
      {next && (
        <Button variant="outlined" size="large" to={next.link}>
          Next to {next.label}
        </Button>
      )}
    </PageNavigationWrapper>
  )
}

const PageNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0px;
`;
