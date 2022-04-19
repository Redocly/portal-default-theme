import React from '@portal/react';
import styled from '@portal/styled-components';
import { mediaCSS } from '@redocly/reference-docs';
import { Link } from '@portal/Link';

export default function FooterColumn({ column }) {
  return (
    <FooterColumnContainer data-component-name="Footer/FooterColumn">
      <FooterColumnTitle>{column.group || column.label}</FooterColumnTitle>
      {column.items.map((columnItem, columnItemInex) =>
        columnItem.type === 'separator' ? (
          <FooterSeparator key={columnItem.label + '_' + columnItemInex}>
            {columnItem.label}
          </FooterSeparator>
        ) : (
          <FooterLink key={columnItemInex} to={columnItem.link} data-cy={columnItem.label}>
            {columnItem.label}
          </FooterLink>
        ),
      )}
    </FooterColumnContainer>
  );
}

const FooterColumnTitle = styled.p`
  display: inline-block;
  font-weight: var(--font-weight-regular);
  font-size: 24px;
  margin-bottom: 1.5em;
  ${mediaCSS({ fontFamily: 'var(--font-family-h)' })};
`;

const FooterSeparator = styled.div`
  opacity: 0.75;
  margin: 10px 0 5px 0;
  font-size: 0.75em;
  text-transform: uppercase;
  ${mediaCSS({ fontFamily: 'var(--font-family-h)' })};
`;

const FooterColumnContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0px 30px;
`;

const FooterLink = styled(Link)`
  font-weight: var(--font-weight-bold);
  padding-bottom: 0.75em;
  color: var(--footer-color-text);
  text-decoration: none;
`;
