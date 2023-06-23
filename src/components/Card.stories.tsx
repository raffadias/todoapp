import { Card } from './Card';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Card',
  args: {
    description: 'Teste de descrição',
    title: 'Título do meu card',
    id: 1
  },
  component: Card,
  decorators: [
    (Story) => {
      return (
        <div className='w-[30%]'>
          {Story()}
        </div>
      );
    }
  ]
} as Meta<Card>;

export const Default: StoryObj<Card> = {};