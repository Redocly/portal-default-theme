import React from 'react';
import type { ResolvedNavLinkItem } from '@portal/types';
import { usePageData } from '@portal/hooks/usePageData';
import { Button } from '@theme/ui';

interface PreviousPageType {
  prevPage: ResolvedNavLinkItem | null;
}

export function PreviousPageLink() {
  const { prevPage }: PreviousPageType = usePageData();
  if (!prevPage) {
    return <div>&nbsp;</div>
  }

  return (
    <Button variant="outlined" size="large" to={prevPage.link}>
      Back to {prevPage.label}
    </Button>
  )
}
