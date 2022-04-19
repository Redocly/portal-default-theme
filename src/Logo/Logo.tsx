import React from '@portal/react';
import styled from '@portal/styled-components';
import type { LogoConfig } from '@portal/types';
import ConditionalLink from '@portal/ConditionalLink';

export function Logo({ logo }: { logo: LogoConfig }) {
  return logo?.image ? (
    <ConditionalLink item={logo}>
      <NavLogo src={logo.image} alt={logo.altText} data-component-name="Logo/Logo" />
    </ConditionalLink>
  ) : null;
}

const NavLogo = styled.img`
  max-width: var(--logo-max-width);
  max-height: var(--logo-max-height);
  height: var(--logo-height);
  margin: var(--logo-margin);
`;
