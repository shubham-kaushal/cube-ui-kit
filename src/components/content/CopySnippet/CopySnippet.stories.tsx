import { ComponentMeta, Story } from '@storybook/react';

import { baseProps } from '../../../stories/lists/baseProps';

import { CopySnippet, CubeCopySnippetProps } from './CopySnippet';

export default {
  title: 'Content/CopySnippet',
  component: CopySnippet,
  parameters: {
    controls: {
      exclude: baseProps,
    },
  },
} as ComponentMeta<typeof CopySnippet>;

const Template: Story<CubeCopySnippetProps> = (args) => (
  <CopySnippet {...args} />
);

export const OneLine = Template.bind({});
OneLine.args = {
  code: 'npm install -g cubejs-cli',
  prefix: '$ ',
};

export const MultiLine = Template.bind({});
MultiLine.args = {
  code: 'npm install -g cubejs-cli\ncubejs deploy',
  prefix: '$ ',
};

export const JavascriptSyntax = Template.bind({});
JavascriptSyntax.args = {
  language: 'javascript',
  code: `cube('LineItems', {
  sql: \`SELECT * FROM public.line_items\`,


  joins: {
    Products: {
      sql: \`\${CUBE}.product_id = \${Products}.id\`,
      relationship: \`belongsTo\`
    },

    Orders: {
      sql: \`\${CUBE}.order_id = \${Orders}.id\`,
      relationship: \`belongsTo\`
    }
  },

  measures: {
    count: {
      type: \`count\`,
      drillMembers: [id, createdAt]
    },

    price: {
      sql: \`price\`,
      type: \`sum\`
    },

    quantity: {
      sql: \`quantity\`,
      type: \`sum\`
    }
  },

  dimensions: {
    id: {
      sql: \`id\`,
      type: \`number\`,
      primaryKey: true
    },

    createdAt: {
      sql: \`created_at\`,
      type: \`time\`
    }
  }
});`,
};
