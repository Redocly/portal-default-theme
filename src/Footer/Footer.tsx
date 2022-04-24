import React from 'react';
import styled from 'styled-components';
import { FooterColumns } from '@theme/Footer/FooterColumns';
import { FooterCopyright } from '@theme/Footer/FooterCopyright';

export default function Footer({ columns, copyrightText }) {
  if (!(columns.length || copyrightText)) {
    return null;
  }

  return (
    <FooterContainer data-component-name="Footer/Footer">
      <FooterColumns columns={columns} />
      <FooterCopyright copyrightText={copyrightText} />
    </FooterContainer>
  );
}

const FooterContainer = styled.footer`
  font-size: 1rem;
  flex-shrink: 0;
  background-color: var(--footer-color-background);
  color: var(--footer-color-text);
  font-family: var(--font-family-primary);
  a,
  a:hover {
    color: var(--footer-color-text);
  }
`;
