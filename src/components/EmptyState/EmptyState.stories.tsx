import { Meta, StoryObj } from '@storybook/react';
import EmptyState from './EmptyState';
import TextLink from '../TextLink/TextLink';

const meta: Meta<typeof EmptyState> = {
    component: EmptyState,
  };


type Story = StoryObj<typeof EmptyState>;

export default meta;
export const Default: Story = {
  args: {
    children: <>
    <p> Sem resultados para a busca </p>
    <TextLink color='primary' href="/home">Voltar para o início</TextLink>
    </>
  },
};
