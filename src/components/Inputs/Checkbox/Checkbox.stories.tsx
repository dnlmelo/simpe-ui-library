import { Meta, StoryObj } from '@storybook/react';
import Checkbox from './Checkbox';

const meta: Meta<typeof Checkbox> = {
    component: Checkbox,
    tags: ['autodocs'],
  };


type Story = StoryObj<typeof Checkbox>;

export default meta;
export const Default: Story = {
  args: {
    label: 'Label',
    infoMessage: 'info',
    error: true,
    errorMessage: 'error'
  },
};
