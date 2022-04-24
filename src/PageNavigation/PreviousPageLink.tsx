import React from '@portal/react';
import type { ResolvedNavLinkItem } from '@portal/types';
import { Button } from '@theme/ui';

interface PreviousPageLinkProps {
  data: ResolvedNavLinkItem | null
}

export function PreviousPageLink({ data }: PreviousPageLinkProps) {
  if (!data) {
    return <div>&nbsp;</div>
  }

  return (
    <Button variant="outlined" size="large" to={data.link}>
      Back to {data.label}
    </Button>
  )
}
