import React from 'react';
import styled from 'styled-components';
import { AlertIcon } from '@theme/ui/AlertIcon';

interface AdmonitionTypeProps {
  type: 'warning' | 'success' | 'danger' | 'attention' | 'info';
}

interface AdmonitionProps extends Partial<AdmonitionTypeProps> {
  name?: string;
}

export function Admonition({ type = 'info', name, children }: React.PropsWithChildren<AdmonitionProps>) {
  return (
    <Wrapper type={type} data-component-name="Markdown/Admonition/Admonition">
      <AlertIcon type={type} />
      {name ? <Heading type={type}>{name}</Heading> : null}
      <Content>{children}</Content>
    </Wrapper>
  );
}

const Wrapper = styled.div<AdmonitionTypeProps>`
  position: relative;
  align-items: center;
  margin: var(--alert-margin-vertical) var(--alert-margin-horizontal);
  padding: var(--alert-padding-vertical) var(--alert-padding-horizontal);
  padding-left: calc(var(--alert-padding-horizontal) * 2 + var(--alert-icon-size));
  border-radius: var(--alert-border-radius);
  font-size: var(--alert-font-size);
  font-weight: var(--alert-font-weight);
  line-height: var(--alert-line-height);

  ${({ type }) => `
    background-color: var(--alert-${type}-background-color);
    color: var(--alert-${type}-text-color);
  `}
`;

const Heading = styled.h5<AdmonitionTypeProps>`
  display: block;
  margin: 0 0 10px;

  letter-spacing: var(--alert-heading-letter-spacing);
  color: ${({ type }) => `var(--alert-${type}-heading-color)`};

  && {
    font-size: var(--alert-heading-font-size);
    font-weight: var(--alert-heading-font-weight);
    line-height: var(--alert-line-height);
    transform: var(--alert-heading-transform);
  }
`;

const Content = styled.div`
  & > p:first-child {
    margin-top: 0;
  }
`;
