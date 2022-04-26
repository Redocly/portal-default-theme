import React from 'react';
import styled from 'styled-components';

import { Box, BoxProps } from '@theme/ui/Box';
import { flexbox, FlexboxProps } from '@portal/styled-system';

export interface FlexProps extends BoxProps, FlexboxProps {}

export const Flex: React.ComponentType<Partial<FlexProps>> = styled(Box)`
  display: flex;
  ${flexbox}
`;

export function FlexSection(props: FlexProps & { children: React.ReactNode | React.ReactNode[] }) {
  return (
    <Flex {...props} mx="auto" width={props.width || { xs: '90%', large: 910 }} data-component-name="ui/Flex">
      {props.children}
    </Flex>
  );
}
