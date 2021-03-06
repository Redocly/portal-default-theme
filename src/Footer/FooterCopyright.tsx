import React from 'react';
import styled from 'styled-components';

export function FooterCopyright({ copyrightText = '' }) {
  return copyrightText ? <Wrapper data-component-name="Footer/FooterCopyright">{copyrightText}</Wrapper> : null;
}

export const Wrapper = styled.section`
  display: flex;
  justify-content: center;
  font-size: 0.875em;
  padding: 1.5em 3em;
  font-weight: var(--font-weight-bold);
  background-color: var(--footer-color-background);
  color: var(--footer-color-text);
  text-align: center;
  span {
    max-width: 1200px;
  }
`;
