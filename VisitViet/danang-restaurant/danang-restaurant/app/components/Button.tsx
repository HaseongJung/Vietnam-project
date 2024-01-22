import type { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode;
  startIcon?: ReactNode;
  endIcon?: ReactNode;
  type?: 'button' | 'submit';
  color?: 'outline' | 'primary' | 'secondary'| 'success' | 'error' | 'info' | 'warning';
  customClass?: string;
  name?: string;
  value?: string;
  disabled?: boolean;
  onClick?: () => void;
};

export const Button = ({
  children,
  startIcon,
  endIcon,
  type = 'button',
  color = 'primary',
  customClass,
  name,
  value,
  disabled,
  onClick,
}: ButtonProps) => {
  let baseClass = 'flex items-center rounded p-2';
  let stateClass = '';

  switch (color) {
    case 'primary':
      stateClass = 'bg-blue-500 text-white hover:bg-blue-600 disabled:bg-blue-300';
      break;
    case 'secondary':
      stateClass = 'bg-gray-400 text-white hover:bg-gray-500 disabled:bg-gray-300';
      break;
    case 'success':
      stateClass = 'bg-green-600 text-white hover:bg-green-700 disabled:bg-green-400';
      break;
    case 'warning':
      stateClass = 'bg-amber-400 text-black hover:bg-amber-500 disabled:bg-amber-300';
      break;
    case 'error':
      stateClass = 'bg-rose-500 text-white hover:bg-rose-600 disabled:bg-rose-300';
      break;
    // Outline styles
    case 'outline':
      stateClass = 'border border-gray-200 dark:border-gray-700 hover:bg-gray-100 hover:dark:bg-gray-800 disabled:opacity-40';

    default:
      break;
  }

  if (stateClass) {
    baseClass += ` ${stateClass}`;
  }

  if (customClass) {
    baseClass += ` ${customClass}`;
  }

  return (
    <button
      type={type}
      name={name}
      value={value}
      className={baseClass}
      disabled={disabled}
      onClick={onClick}
    >
      {startIcon && <span className="mr-2">{startIcon}</span>}
      {children}
      {endIcon && <span className="ml-r">{endIcon}</span>}
    </button>
  );
};
