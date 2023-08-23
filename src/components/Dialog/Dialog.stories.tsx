import { Meta, StoryObj } from '@storybook/react';
import Dialog from './Dialog';
import { Button } from '../Button/Button';

const meta: Meta<typeof Dialog>= {
  component: Dialog,
  tags: ['autodocs'],
};


type Story = StoryObj<typeof Dialog>;

export default meta;

export const Primary: Story = {
  decorators: [(story) => 
  <>
  <Button id='x' text='button' color='primary' type={'button'}/>
  <div>{story()}</div>
  </>],
  args: {
    title: `titulo`,
    description: 'descrição',
    cancelTitle: 'cancelar',
    confirmTitle: 'confirmar',
    trigger: 'x',
    onClose: console.log
  }
};
