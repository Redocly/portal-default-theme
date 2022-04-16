import React from '@portal/react';
import { copyToClipboard } from '@portal/utils';
import {
  Wrapper,
  DoneIndicator,
  CopyCodeButton,
  CodeSampleButtonContainer,
} from '@theme/Markdown/CodeSample/styled';

export function CodeSample({ rawContent, highlighted, language }) {
  const langClassName = language ? `language-${language}` : '';

  const [isCopied, setIsCopied] = React.useState(false);

  const copyCode = (code: string) => {
    copyToClipboard(code);
    setIsCopied(true);
    setTimeout(() => setIsCopied(false), 1500);
  };

  return (
    <Wrapper className="code-sample" data-component-name="Markdown/CodeSample/CodeSample">
      <CodeSampleButtonContainer onClick={() => copyCode(rawContent)}>
        {!isCopied && <CopyCodeButton title="Copy the code snippet">Copy</CopyCodeButton>}
        {isCopied && <DoneIndicator>Copied</DoneIndicator>}
      </CodeSampleButtonContainer>
      <pre className={langClassName}>
        <code className={langClassName} dangerouslySetInnerHTML={{ __html: highlighted }} />
      </pre>
    </Wrapper>
  );
}
