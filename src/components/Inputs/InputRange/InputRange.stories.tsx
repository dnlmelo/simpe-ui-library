import { Meta, StoryObj } from '@storybook/react';
import InputRange from './InputRange';

const meta: Meta<typeof InputRange>= {
  component: InputRange,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof InputRange>;

export default meta;

export const Default: Story = {
  args: {
    label: 'anos',
    maxSuffix: 'anos',
    minSuffix: 'anos',
    min: 10,
    max: 90
  }
};
