import React from '@portal/react';
import type { ResolvedNavLinkItem } from '@portal/types';
import { Button } from '@theme/ui';

interface NextPageLinkProps {
  data: ResolvedNavLinkItem | null
}

export function NextPageLink({ data }: NextPageLinkProps) {
  if (!data) {
    return <div>&nbsp;</div>
  }

  return (
    <Button variant="outlined" size="large" to={data.link}>
      Next to {data.label}
    </Button>
  )
}
