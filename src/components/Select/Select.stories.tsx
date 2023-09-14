import { Meta, StoryObj } from '@storybook/react';
import {Select} from './Select';

const meta: Meta<typeof Select>= {
  component: Select,
  tags: ['autodocs'],
};

type Story = StoryObj<typeof Select>;

export default meta;

export const Default: Story = {
  args: {
    id: 'x',
    label: 'label',
    infoMessage: 'msg',
    placeholder: 'Placeholder',
    errorMessage: 'error',
    size: 'md',
    options: [
      {
        value: 'valor 1',
        label: 'valor 1 com um texto maior'
      },
      {
        value: 'valor 2',
        label: 'valor 2'
      }
    ]
  }
};
