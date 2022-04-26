import React from 'react';
import styled from 'styled-components';
import { PreviousPageLink } from '@theme/PageNavigation/PreviousPageLink';
import { NextPageLink } from '@theme/PageNavigation/NextPageLink';

export function PageNavigation() {
  return (
    <PageNavigationWrapper data-component-name="PageNavigation/PageNavigation">
      <PreviousPageLink />
      <NextPageLink />
    </PageNavigationWrapper>
  )
}

const PageNavigationWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 25px 0px;
`;