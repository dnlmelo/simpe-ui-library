import { Meta, StoryObj } from '@storybook/react';
import TextLink from './TextLink';
import { Icon } from '../Icons/Icon';

const meta: Meta<typeof TextLink> = {
    component: TextLink,
    tags: ['autodocs'],
  };


type Story = StoryObj<typeof TextLink>;

export default meta;
export const Primary: Story = {
  args: {
    color: 'primary',
    children: <>Link <Icon name='chevron-right' size='sm'/></>
  },
};
