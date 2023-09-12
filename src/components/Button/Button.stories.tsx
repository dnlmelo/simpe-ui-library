import { Meta, StoryObj } from '@storybook/react';
import {Button} from './Button';
import { Icon } from '../Icons/Icon';

const meta: Meta<typeof Button> = {
    component: Button,
    tags: ['autodocs'],
  };


type Story = StoryObj<typeof Button>;

export default meta;
export const Primary: Story = {
  args: {
    color: 'primary',
    type: 'button',
    children: <>Button <Icon name='link' size={'sm'}/></>
  },
};
