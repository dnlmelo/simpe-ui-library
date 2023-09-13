import { Meta, StoryObj } from '@storybook/react';
import {InputCurrency} from './InputCurrency';

const meta: Meta<typeof InputCurrency>= {
  component: InputCurrency,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof InputCurrency>;

export default meta;
export const Default: Story = {
  args: {
    readOnly: true,
    label: 'label',
    infoMessage: 'msg',
    placeholder: 'Placeholder',
    size: 'md',
    value: 12,
  }
};
