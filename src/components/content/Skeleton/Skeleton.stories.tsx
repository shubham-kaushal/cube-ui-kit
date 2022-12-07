import { Meta, Story } from '@storybook/react';

import { baseProps } from '../../../stories/lists/baseProps';

import { CubeSkeletonProps, Skeleton } from './Skeleton';

export default {
  title: 'Content/Skeleton',
  component: Skeleton,
  parameters: {
    controls: {
      exclude: baseProps,
    },
  },
} as Meta<CubeSkeletonProps>;

const Template: Story<CubeSkeletonProps> = (args) => <Skeleton {...args} />;

export const Page = Template.bind({});
Page.args = {
  layout: 'page',
};

export const Topbar = Template.bind({});
Topbar.args = {
  layout: 'topbar',
};

export const Menu = Template.bind({});
Menu.args = {
  layout: 'menu',
};

export const Tabs = Template.bind({});
Tabs.args = {
  layout: 'tabs',
};

export const Stats = Template.bind({});
Stats.args = {
  layout: 'stats',
};

export const Table = Template.bind({});
Table.args = {
  layout: 'table',
};

export const Chart = Template.bind({});
Chart.args = {
  layout: 'chart',
  columns: 16,
};
