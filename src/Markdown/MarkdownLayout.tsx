import React from '@portal/react';
import { PageWrapper } from '@theme/Markdown/PageWrapper';
import { ContentWrapper } from '@theme/Markdown/ContentWrapper';
import { PageNavigation } from '@theme/PageNavigation/PageNavigation';

export function MarkdownLayout({ tableOfContent, markdownWrapper }) {
  return (
    <PageWrapper data-component-name="Markdown/MarkdownLayout">
      <ContentWrapper withToc={true}>
        {markdownWrapper}
        <PageNavigation />
      </ContentWrapper>
      {tableOfContent}
    </PageWrapper>
  );
}
