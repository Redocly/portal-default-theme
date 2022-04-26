import React from 'react';
import { PageWrapper } from '@theme/Markdown/PageWrapper';
import { ContentWrapper } from '@theme/Markdown/ContentWrapper';

export function MarkdownLayout({ tableOfContent, markdownWrapper }) {
  return (
    <PageWrapper data-component-name="Markdown/MarkdownLayout">
      <ContentWrapper withToc={true}>{markdownWrapper}</ContentWrapper>
      {tableOfContent}
    </PageWrapper>
  );
}
