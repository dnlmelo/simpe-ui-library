import { Meta, StoryObj } from '@storybook/react';
import CardSection from './CardSection';

const meta: Meta<typeof CardSection>= {
    component: CardSection,
    tags: ['autodocs'],
  };


type Story = StoryObj<typeof CardSection>;

export default meta;
export const Primary: Story = {
  args: {
    children: <p>asdfasdfasdf</p>
  }
};
