import React from '@portal/react';
import styled from '@portal/styled-components';
import type { ResolvedNavLinkItem } from '@portal/types';
import { usePageData } from '@portal/hooks/useData';
import { PreviousPageLink } from '@theme/PageNavigation/PreviousPageLink';
import { NextPageLink } from '@theme/PageNavigation/NextPageLink';

interface PageNavigationProps {
  prevPage: ResolvedNavLinkItem | null;
  nextPage: ResolvedNavLinkItem | null;
}

export function PageNavigation() {
  const { prevPage, nextPage }: PageNavigationProps = usePageData('prevPage', 'nextPage');
  return (
    <PageNavigationWrapper data-component-name="PageNavigation/PageNavigation">
      <PreviousPageLink data={prevPage} />
      <NextPageLink data={nextPage} />
    </PageNavigationWrapper>
  )
}

const PageNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0px;
`;