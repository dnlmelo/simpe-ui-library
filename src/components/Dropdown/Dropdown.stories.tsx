import { Meta, StoryObj } from '@storybook/react';
import Dropdown from './Dropdown';
import TextLink from '../TextLink/TextLink';
import { Icon } from '../Icons/Icon';

const meta: Meta<typeof Dropdown>= {
  component: Dropdown,
  tags: ['autodocs'],
};


type Story = StoryObj<typeof Dropdown>;

export default meta;

export const Primary: Story = {
  args: {
    label: `titulo`,
    children: <>
      <TextLink>Link <Icon name='link' size='sm'></Icon></TextLink>
      <TextLink>Link 2<Icon name='link' size='sm'></Icon></TextLink>
    </>
  }
};
