import { Meta, StoryObj } from '@storybook/react';
import {Textarea} from './Textarea';

const meta: Meta<typeof Textarea>= {
  component: Textarea,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Textarea>;

export default meta;

export const Default: Story = {
  args: {
    id: 'x',
    label: 'label',
    infoMessage: 'msg',
    placeholder: 'Placeholder',
    errorMessage: 'error',
    size: 'md',
    value: 'texto',
  }
};
