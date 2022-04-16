import React from '@portal/react';
import styled from '@portal/styled-components';
import { UniversalLink } from '@portal/UniversalLink/UniversalLink';

export function MenuLink(props) {
  return <StyledLink {...props} data-component-name="Sidebar/MenuLink">{props.children}</StyledLink>
}

export const StyledLink = styled(UniversalLink)`
  text-decoration: none;
  color: var(--sidebar-text-color);

  &&.external-url:after {
    content: none;
  }
`;
