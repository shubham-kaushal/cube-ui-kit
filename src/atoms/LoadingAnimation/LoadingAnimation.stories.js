import React from 'react';

import UIKitLoadingAnimation from './LoadingAnimation';

// fix component name
const LoadingAnimation = (args) => <UIKitLoadingAnimation {...args} />;

export default {
  title: 'UIKit/Atoms/LoadingAnimation',
  component: LoadingAnimation,
  argTypes: {
    size: {
      defaultValue: undefined,
      control: {
        type: 'inline-radio',
        options: [undefined, 'small', 'medium', 'large', 128],
      },
    },
  },
};

const Template = ({ size }) => <LoadingAnimation size={size} />;

export const Default = Template.bind({});
Default.args = {};