import { ButtonProps, Button } from './Button';
import { Meta, StoryObj } from '@storybook/react';

export default {
  title: 'Components/Button',
  args: {
    
  },
  component: Button,
  decorators: [
    (Story) => {
      return (
        <div className='p-10'>
          {Story()}
        </div>
      );
    }
  ]
} as Meta<ButtonProps>;

export const Success: StoryObj<ButtonProps> = {
  args: {
    variant: 'success',
    children: 'Button'
  },
  decorators: [
    (Story) => {
      return (
        <div className='bg-gray-500 p-10'>
          {Story()}
        </div>
      );
    }
  ]
};

export const Danger: StoryObj<ButtonProps> = {
  args: {
    variant: 'danger',
    children: 'Button'
  },
  decorators: [
    (Story) => {
      return (
        <div className='bg-gray-500 p-10'>
          {Story()}
        </div>
      );
    }
  ]
};

export const Primary: StoryObj<ButtonProps> = {
  args: {
    variant: 'primary',
    children: 'Button'
  },
  decorators: [
    (Story) => {
      return (
        <div className='bg-gray-500 p-10'>
          {Story()}
        </div>
      );
    }
  ]
};