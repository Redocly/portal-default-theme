import React from 'react';
import type { ResolvedNavLinkItem } from '@portal/types';
import { usePageData } from '@portal/hooks/usePageData';
import { Button } from '@theme/ui';

interface NextPageType {
  nextPage: ResolvedNavLinkItem | null;
}

export function NextPageLink() {
  const { nextPage }: NextPageType = usePageData();
  if (!nextPage) {
    return <div>&nbsp;</div>
  }

  return (
    <Button variant="outlined" size="large" to={nextPage.link}>
      Next to {nextPage.label}
    </Button>
  )
}
