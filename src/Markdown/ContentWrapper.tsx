import styled from 'styled-components';
import { mediaQueries } from '@portal/media-css';

export const ContentWrapper = styled.section.attrs(() => ({
  'data-component-name': 'Markdown/ContentWrapper'
}))<{ withToc: boolean }>`
  max-width: var(--content-wrapper-max-width);
  width: 90%;
  margin: 0 auto;

  padding: var(--content-wrapper-padding-vertical) var(--content-wrapper-padding-horizontal);

  & > article:first-child > h1:first-child {
    // disable margin top for h1 on the title heading if there is no "Last updated at" block
    /* margin-top: 0; */
  }

  ${mediaQueries.medium} {
    width: ${({ withToc }) => (withToc ? `calc(90% - var(--toc-width))` : '90%')};
  }
`;
