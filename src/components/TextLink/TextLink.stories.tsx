import { Meta, StoryObj } from '@storybook/react';
import TextLink from './TextLink';

const meta: Meta<typeof TextLink> = {
    component: TextLink,
    tags: ['autodocs'],
  };


type Story = StoryObj<typeof TextLink>;

export default meta;
export const Primary: Story = {
  args: {
    color: 'primary',
    children: 'Button'
  },
};
