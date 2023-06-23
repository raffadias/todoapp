import React, { ReactNode } from 'react';

export type ButtonProps = {
  onClick: () => void;
  children: ReactNode;
  disabled?: boolean;
  variant: Variant
};

type Variant = 'success' | 'danger' | 'primary';

export const Button: React.FC<ButtonProps> = ({
  onClick,
  children,
  variant,
  disabled
}) => {
  let buttonClass = '';

  switch (variant) {
  case 'success':
    buttonClass =
        'bg-green-700 hover:bg-green-800 disabled:cursor-not-allowed disabled:bg-gray-500 disabled:hover:bg-gray-500 disabled:opacity-50 text-gray-200 w-[90%] shadow-lg flex items-center justify-center gap-1 font-semibold p-2 rounded-md transition-all ease-in-out delay-100';
    break;
  case 'danger':
    buttonClass =
        'bg-red-500 dark:bg-red-500 hover:bg-red-800 hover:dark:bg-red-800 flex w-full gap-1 justify-center items-center text-white font-semibold p-2 rounded-md shadow-2xl transition-all delay-50 mb-3';
    break;
  case 'primary':
    buttonClass =
        'bg-gray-700 dark:bg-gray-500 hover:bg-gray-800 flex w-full gap-1 justify-center items-center text-white font-semibold p-2 rounded-md shadow-2xl transition-all delay-50';
  }

  return (
    <button onClick={onClick} className={buttonClass} disabled={disabled}>
      {children}
    </button>
  );
};