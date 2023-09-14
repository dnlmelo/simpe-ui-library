import { Meta, StoryObj } from '@storybook/react';
import {Badge} from './Badge';

const meta: Meta<typeof Badge> = {
    component: Badge,
    tags: ['autodocs'],
  };


type Story = StoryObj<typeof Badge>;

export default meta;
export const Primary: Story = {
  args: {
    color: 'primary',
    text: '2'
  },
};
