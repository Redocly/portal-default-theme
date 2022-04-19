import React from '@portal/react';
import styled from '@portal/styled-components';

export function Tab({ activeTab, label, onClick }) {
  const isActive = activeTab === label;
  return (
    <TabItem active={isActive} onClick={() => onClick(label)} data-component-name="Markdown/Tabs/Tab">
      {label}
    </TabItem>
  );
}

const TabItem = styled.li<{ active: boolean }>`
  display: inline-block;
  list-style: none;
  margin-bottom: -1px;
  padding: 0.75rem 1rem;
  cursor: pointer;

  ${({ active }) =>
    active &&
    `
    background-color: white;
    border: solid #ccc;
    border-width: 1px 1px 0 1px;
  `}
`;
