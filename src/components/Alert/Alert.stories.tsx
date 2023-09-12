import { Meta, StoryObj } from '@storybook/react';
import {Alert, AlertActionPrimary, AlertActionSecondary, AlertDescription, AlertTitle} from './Alert';

const meta: Meta<typeof Alert> = {
    component: Alert,
  };


type Story = StoryObj<typeof Alert>;

export default meta;
export const Default: Story = {
  args: {
    type: 'info',
    mode: 'block',
    children: <>
     <AlertTitle>Title</AlertTitle>
     <AlertDescription><p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Obcaecati aperiam nulla eos a voluptate, voluptas consequatur modi, quo debitis, ipsa saepe. Architecto natus consequuntur, distinctio eos optio expedita a harum!</p></AlertDescription>
     <AlertActionPrimary>Primary</AlertActionPrimary>
     <AlertActionSecondary>Secondary</AlertActionSecondary>
    </>
  },
};
