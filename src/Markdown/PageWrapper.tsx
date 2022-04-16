import React from '@portal/react';
import styled from '@portal/styled-components';

export function PageWrapper({ children }) {
  return <Wrapper data-component-name="Markdown/PageWrapper">{children}</Wrapper>
}

export const Wrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
`;
