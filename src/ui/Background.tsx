import React from '@portal/react';
import { Flex } from '@theme/ui/Flex';
import styled from '@portal/styled-components';
import { mediaCSS } from '@redocly/reference-docs';

export function Background(props) {
  return <StyledBackground {...props} data-component-name="ui/Background" />
}

const StyledBackground = styled(Flex)`
  background: var(--navbar-color-background);
  color: var(--color-primary-contrast);
  ${mediaCSS({ fontFamily: 'var(--h-font-family)' })};

  a:not([role='button']),
  a:not([role='button']):hover {
    color: var(--color-primary-contrast);
  }
`;
