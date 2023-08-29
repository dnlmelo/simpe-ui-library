import { Meta, StoryObj } from '@storybook/react';
import InputNumber from './InputNumber';

const meta: Meta<typeof InputNumber>= {
  component: InputNumber,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof InputNumber>;

export default meta;
export const Default: Story = {
  args: {
    readOnly: true,
    label: 'label',
    infoMessage: 'msg',
    placeholder: 'Placeholder',
    size: 'md',
    value: 12,
  }
};
