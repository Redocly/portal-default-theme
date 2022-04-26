import * as React from 'react';
import styled from 'styled-components';

export const highlight = (text: string | string[]) => {
  if (!Array.isArray(text)) return text;

  const [pre, entry, suf] = text;
  return <>
    {pre}
      <Strong>{entry}</Strong>
    {suf}
  </>
};

const Strong = styled.strong`
  color: var(--color-primary-main);
`