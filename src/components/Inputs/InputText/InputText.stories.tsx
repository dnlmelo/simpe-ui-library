import { Meta, StoryObj } from '@storybook/react';
import {InputText} from './InputText';

const meta: Meta<typeof InputText>= {
  component: InputText,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof InputText>;

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
