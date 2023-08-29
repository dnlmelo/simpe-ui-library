import { Meta, StoryObj } from '@storybook/react';
import Tooltip from './Tooltip';
import { createPortal } from 'react-dom';
import { Icon } from '../Icons/Icon';

const meta: Meta<typeof Tooltip>= {
  component:Tooltip,
  tags: ['autodocs'],
};


type Story = StoryObj<typeof Tooltip>;

export default meta;

export const Primary: Story = {
  decorators: [(story) => 
  <div style={{textAlign: 'center'}}>
  <Icon name={"info"} size={"sm"} color="info" id="x" />
  {createPortal(story(), document.body)}
  </div>],
  args: {
    color: 'error',
    triggerId: 'x',
    x: 'left',
    y: 'top',
    children: 'message'
  }
};
