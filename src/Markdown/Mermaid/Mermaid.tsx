import React from '@portal/react';
import styled from '@portal/styled-components';

export function Mermaid({ diagramHtml }) {
  return <Wrapper className="mermaid-wrapper" dangerouslySetInnerHTML={{ __html: diagramHtml }} />;
}

const Wrapper = styled.div`
  .mermaid > svg {
    font-size: 14px !important;
    max-width: 100%;
  }
`;
