import React from '@portal/react';
import styled from '@portal/styled-components';
import { Tab } from '@theme/Markdown/Tabs/Tab';

export function Tabs({ children }) {
  const [activeTab, setActiveTab] = React.useState(children[0].props.label);
  const onTabSelect = label => setActiveTab(label);

  return (
    <TabsContainer>
      <TabList>
        {children.map(child => {
          const { label } = child.props;
          return <Tab activeTab={activeTab} key={label} label={label} onClick={onTabSelect} />;
        })}
      </TabList>
      <TabContent>
        {children.map(child => {
          if (child.props.label !== activeTab) return undefined;
          return child.props.children;
        })}
      </TabContent>
    </TabsContainer>
  );
}

const TabsContainer = styled.div`
  margin: 10px 0;
`;

const TabList = styled.ol`
  border-bottom: 1px solid #ccc;
  padding: 0;
  margin-block-end: 0;
`;

const TabContent = styled.div`
  padding: 10px 5px;
  border: 1px solid #ccc;
  border-top: none;
  padding: 1rem;
`;
