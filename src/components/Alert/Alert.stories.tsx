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
     <AlertDescription>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Deleniti labore rem nihil, aspernatur quo iusto a neque velit nulla eos quasi beatae laboriosam deserunt inventore enim ut odit consectetur quidem.</AlertDescription>
     <AlertActionPrimary>Primary</AlertActionPrimary>
     <AlertActionSecondary>Secondary</AlertActionSecondary>
    </>
  },
};
