import React from 'react';
import { PageWrapper } from '@theme/Markdown/PageWrapper';
import { ContentWrapper } from '@theme/Markdown/ContentWrapper';
import { PageNavigation } from '@theme/PageNavigation/PageNavigation';

export function MarkdownLayout({ tableOfContent, markdownWrapper }) {

  const prev = {
    type: 'link',
    label: 'Homepage',
    link: '/'
  };

  const next = {
    type: 'link',
    label: 'Markdown',
    link: '/markdown'
  };

  return (
    <PageWrapper data-component-name="Markdown/MarkdownLayout">
      <ContentWrapper withToc={true}>
        {markdownWrapper}
        <PageNavigation prev={prev} next={next} />
      </ContentWrapper>
      {tableOfContent}
    </PageWrapper>
  );
}
