import { Meta, StoryObj } from '@storybook/react';
import {Breadcrumb} from './Breadcrumb';

const meta: Meta<typeof Breadcrumb> = {
    component: Breadcrumb,
    tags: ['autodocs'],
  };


type Story = StoryObj<typeof Breadcrumb>;

export default meta;
export const Primary: Story = {
  args: {
    history: [
      {text: 'nivel 1', href: '/back'},
      {text: 'nivel 2', href: '/back'},
      {text: 'nivel 3', href: '/back'}
  ],
  },
};
