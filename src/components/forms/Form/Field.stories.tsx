import { Meta, Story } from '@storybook/react';
import { baseProps } from '../../../stories/lists/baseProps';
import { CubeFieldProps, Field } from './Field';
import { TextInput } from '../TextInput/TextInput';

export default {
  title: 'Forms/Field',
  component: Field,
  parameters: { controls: { exclude: baseProps } },
} as Meta;

const Template: Story<CubeFieldProps<any>> = (args) => (
  <Field label="Field name" {...args}>
    <TextInput />
  </Field>
);

export const Default = Template.bind({});
Default.args = {};

export const WithTooltip = Template.bind({});
WithTooltip.args = {
  tooltip: 'Long description',
};

export const WithMessage = Template.bind({});
WithMessage.args = {
  message: 'Inline description of the field',
};

export const WithErrorMessage = Template.bind({});
WithErrorMessage.args = {
  message: 'This field is required',
  validationState: 'invalid',
};

export const Styled = Template.bind({});
Styled.args = {
  labelPosition: 'side',
  styles: {
    placeItems: 'end',
  },
};

export const StyledLabel = Template.bind({});
StyledLabel.args = {
  labelStyles: {
    preset: 't2m',
  },
};

export const WithExtra = Template.bind({});
WithExtra.args = {
  extra: 'Extra info',
};

export const WithLabelSuffix = Template.bind({});
WithLabelSuffix.args = {
  labelSuffix: 'Suffix',
};

export const WithExtraAndSuffix = Template.bind({});
WithExtraAndSuffix.args = {
  extra: 'Extra info',
  labelSuffix: 'Suffix',
};

export const WithSuffixAndTooltip = Template.bind({});
WithSuffixAndTooltip.args = {
  labelSuffix: 'Suffix',
  tooltip: 'Long description',
};

export const WithSuffixExtraAndTooltip = Template.bind({});
WithSuffixExtraAndTooltip.args = {
  labelSuffix: 'Suffix',
  extra: 'Extra info',
  tooltip: 'Long description',
};
