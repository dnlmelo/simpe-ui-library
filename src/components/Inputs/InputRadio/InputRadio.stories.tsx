import { Meta, StoryObj } from '@storybook/react';
import {InputRadio} from './InputRadio';

const meta: Meta<typeof InputRadio>= {
  component: InputRadio,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof InputRadio>;

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
    disabled: false
  }
};
