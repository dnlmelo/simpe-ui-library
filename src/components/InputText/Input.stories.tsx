import { Meta, StoryObj } from '@storybook/react';
import InputText from './Input';

const meta: Meta<typeof InputText>= {
  component: InputText,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof InputText>;

export default meta;

export const Primary: Story = {
  args: {
    id: 'x',
    label: 'label',
    infoMessage: 'msg',
    placeholder: 'Placeholder',
    size: 'md',
    value: 'x',
    disabled: true
  }
};
