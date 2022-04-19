import React from '@portal/react';
import styled from '@portal/styled-components';
import type { MdHeading } from '@portal/types';
import { mediaQueries } from '@portal/media-css';
import { useFullHeight, useActiveHeading } from '@portal/hooks';

interface TableOfContentProps {
  headings?: Array<MdHeading | null> | null | undefined;
  contentWrapper: HTMLDivElement | null;
  tocMaxDepth: number;
}

export default function TableOfContent(props: TableOfContentProps) {
  const { headings, tocMaxDepth } = props;

  const sidebar = React.useRef<HTMLDivElement | null>(null);
  useFullHeight(sidebar);
  const activeHeadingId = useActiveHeading(props.contentWrapper);

  if (headings && headings.length === 1 && headings[0]?.depth === 1) {
    return null;
  }
  if (!headings?.length) {
    return null;
  }

  return (
    <>
      {headings && (
        <TableOfContentMenu data-component-name="TableOfContent/TableOfContent">
          <TableOfContentItems ref={sidebar}>
            <TocHeader>On this page</TocHeader>
            {headings.map((heading: MdHeading, idx: number) => {
              if (idx === 0 && heading.depth === 1) {
                return null;
              }
              if (heading.depth && heading.depth > tocMaxDepth) {
                return null;
              }
              const href = '#' + heading.id;
              return (
                <MenuItem
                  key={href}
                  depth={heading.depth || 0}
                  href={href}
                  className={'#' + activeHeadingId === href ? 'active' : ''}
                  dangerouslySetInnerHTML={{ __html: heading.value || '' }}
                  data-cy={`toc-${heading.value}`}
                />
              );
            })}
          </TableOfContentItems>
        </TableOfContentMenu>
      )}
    </>
  );
}

const TocHeader = styled.div`
  font-size: 0.8em;
  padding: 10px 15px;
  font-weight: bold;
  text-transform: uppercase;
`;

const MenuItem = styled.a<{ depth: number }>`
  display: block;
  color: var(--color-text-main);
  cursor: pointer;
  font-size: 0.8em;
  padding: 10px 15px;
  padding-left: ${({ depth }) => (depth - 1) * 15}px;
  transition: background-color 0.3s, color 0.3s;
  text-decoration: none;
  word-break: break-word;
  font-family: var(--font-family-h);
  :hover,
  &.active {
    color: var(--sidebar-text-active-color);
    background-color: --sidebar-text-active-background-color;
  }
  :empty {
    padding: 0;
  }
`;

const TableOfContentMenu = styled.aside`
  font-size: 1rem;
  background-color: transparent;
  flex-shrink: 0;
  display: none !important;
  font-family: var(--font-family-primary);
  ${mediaQueries.medium} {
    width: var(--toc-width);
    display: block !important;
  }
`;

const TableOfContentItems = styled.div`
  position: sticky;
  top: calc(var(--navbar-height) + 20px);
  max-height: calc(100vh - var(--navbar-height) - 20px);
  border-left: 1px solid var(--color-border-light);
  overflow-y: auto;
  width: var(--toc-width); ;
`;
