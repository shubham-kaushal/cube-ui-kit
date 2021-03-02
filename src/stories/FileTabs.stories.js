import React, { useState } from 'react';

import UIKitFileTabs from '../components/FileTabs';

// fix component name
const FileTabs = (args) => <UIKitFileTabs {...args} />;

FileTabs.TabPane = UIKitFileTabs.TabPane;

export default {
  title: 'Example/FileTabs',
  component: FileTabs,
  argTypes: {},
};

const Template = () => {
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7]);
  const [activeKey, setActiveKey] = useState(2);

  function onClose(id) {
    setArr((arr) => arr.filter((n) => n !== id));
  }

  function onClick(id) {
    setActiveKey(id);
  }

  return (
    <FileTabs activeKey={activeKey} onTabClose={onClose} onTabClick={onClick}>
      {arr.map((n) => (
        <FileTabs.TabPane tab={`Long Tab ${n}`} id={n} key={n} dirty={n === 3}>
          Content of tab {n}
        </FileTabs.TabPane>
      ))}
    </FileTabs>
  );
};

export const Basic = Template.bind({});
Basic.args = {};