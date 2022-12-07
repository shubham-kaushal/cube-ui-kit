import { CaretDownOutlined, DollarCircleOutlined } from '@ant-design/icons';
import { Story } from '@storybook/react';

import { baseProps } from '../../../stories/lists/baseProps';
import { Space } from '../../layout/Space';

import { Button } from './Button';

import { CubeButtonProps } from '.';

export default {
  title: 'Actions/Button',
  component: Button,
  parameters: { controls: { exclude: baseProps } },
  argTypes: {
    size: {
      defaultValue: undefined,
      control: { type: 'radio', options: [undefined, 'small', 'large'] },
    },
    type: {
      defaultValue: undefined,
      control: {
        type: 'radio',
        options: [
          undefined,
          'secondary',
          'primary',
          'outline',
          'clear',
          'neutral',
          'link',
        ],
      },
    },
    theme: {
      defaultValue: undefined,
      control: { type: 'radio', options: [undefined, 'danger'] },
    },
  },
};

const Template: Story<CubeButtonProps> = ({
  icon,
  rightIcon,
  label,
  onClick,
  ...props
}) => (
  <Button icon={icon ? <DollarCircleOutlined /> : undefined} {...props}>
    {label}
  </Button>
);

const TemplateSizes: Story<CubeButtonProps> = ({
  label,
  icon,
  rightIcon,
  size,
  ...props
}) => (
  <Space>
    <Button {...props} size="small">
      {label}
    </Button>
    <Button {...props} size="medium">
      {label}
    </Button>
    <Button {...props} size="large">
      {label}
    </Button>
  </Space>
);

const TemplateStates: Story<CubeButtonProps> = ({ label, mods, ...props }) => (
  <Space>
    <Button
      {...props}
      mods={{
        hovered: false,
        pressed: false,
        focused: false,
        disabled: false,
      }}
    >
      {label || 'Secondary'}
    </Button>
    <Button
      {...props}
      mods={{
        hovered: true,
        pressed: false,
        focused: false,
        disabled: false,
      }}
    >
      {label || 'Hovered'}
    </Button>
    <Button
      {...props}
      mods={{
        hovered: false,
        pressed: true,
        focused: false,
        disabled: false,
      }}
    >
      {label || 'Pressed'}
    </Button>
    <Button
      {...props}
      mods={{
        hovered: false,
        pressed: false,
        focused: true,
        disabled: false,
      }}
    >
      {label || 'Focused'}
    </Button>
    <Button
      {...props}
      isDisabled
      mods={{
        hovered: false,
        pressed: false,
        focused: false,
      }}
    >
      {label || 'Disabled'}
    </Button>
  </Space>
);

export const Default = Template.bind({});
Default.args = {
  label: 'Button',
};

export const SecondaryStates = TemplateStates.bind({});
SecondaryStates.args = {
  type: 'secondary',
};

export const PrimaryStates = TemplateStates.bind({});
PrimaryStates.args = {
  type: 'primary',
};

export const OutlineStates = TemplateStates.bind({});
OutlineStates.args = {
  type: 'outline',
};

export const ClearStates = TemplateStates.bind({});
ClearStates.args = {
  type: 'clear',
};

export const NeutralStates = TemplateStates.bind({});
NeutralStates.args = {
  type: 'neutral',
};

export const LinkStates = TemplateStates.bind({});
LinkStates.args = {
  type: 'link',
};

export const Small = Template.bind({});
Small.args = {
  label: 'Button',
  size: 'small',
};

export const Large = Template.bind({});
Large.args = {
  label: 'Button',
  size: 'large',
};

export const Danger = Template.bind({});
Danger.args = {
  label: 'Button',
  theme: 'danger',
};

export const LeftIconAndText = TemplateSizes.bind({});
LeftIconAndText.args = {
  label: 'Button',
  icon: <DollarCircleOutlined />,
};

export const RightIconAndText = TemplateSizes.bind({});
RightIconAndText.args = {
  label: 'Button',
  rightIcon: <CaretDownOutlined />,
};

export const TwoIconsAndText = TemplateSizes.bind({});
TwoIconsAndText.args = {
  label: 'Button',
  icon: <DollarCircleOutlined />,
  rightIcon: <CaretDownOutlined />,
};

export const OnlyIcon = TemplateSizes.bind({});
OnlyIcon.args = {
  icon: <DollarCircleOutlined />,
};

export const Loading = TemplateSizes.bind({});
Loading.args = {
  icon: <DollarCircleOutlined />,
  isLoading: true,
  label: 'Button',
};
