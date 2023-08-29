import { Meta, StoryObj } from '@storybook/react';
import KeyValue from './KeyValue';

const meta: Meta<typeof KeyValue>= {
  component: KeyValue,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof KeyValue>;

export default meta;

export const Default: Story = {
  args: {
    size: 'md',
    valueText: 'texto',
    keyText: 'key',
  }
};
