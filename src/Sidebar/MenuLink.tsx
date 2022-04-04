import styled from '@portal/styled-components';
import { UniversalLink } from '@portal/UniversalLink/UniversalLink';

export const MenuLink = styled(UniversalLink)`
  text-decoration: none;
  color: var(--sidebar-text-color);

  &&.external-url:after {
    content: none;
  }
`;
