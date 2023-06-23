import { Input, InputProps } from './Input';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Input',
  args: {
    
  },
  component: Input,
  decorators: [
    (Story) => {
      return (
        <div className='m-10 p-10'>
          {Story()}
        </div>
      );
    }
  ]
} as Meta<InputProps>;

export const Light: StoryObj<InputProps> = {
  decorators: [
    (Story) => {
      return (
        <div className='bg-gray-500 m-10 p-10'>
          {Story()}
        </div>
      );
    }
  ]
};

export const Dark: StoryObj<InputProps> = {
  decorators: [
    (Story) => {
      return (
        <div className='bg-gray-700 m-10 p-10'>
          {Story()}
        </div>
      );
    }
  ]
};