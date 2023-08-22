import { Meta, StoryObj } from '@storybook/react';
import Collapse from './Collapse';

const meta: Meta<typeof Collapse>= {
    component: Collapse,
    tags: ['autodocs'],
  };


type Story = StoryObj<typeof Collapse>;

export default meta;
export const Primary: Story = {
  args: {
    title: `x`,
    collapsed: false,
    children: 'children'
  }
};
