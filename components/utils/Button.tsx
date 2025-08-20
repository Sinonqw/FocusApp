import React, { ReactNode, ButtonHTMLAttributes } from 'react';

type ButtonVariant = 'primary' | 'secondary';


interface IButton extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant; 
}

const Button = ({ children, variant = 'primary', ...rest }: IButton) => {
  const baseClasses = 'mt-auto cursor-pointer font-semibold py-3 px-8 rounded-full shadow-md transition-colors duration-300';
  
  // Создаем словарь стилей для вариантов
  const buttonVariantClasses: Record<ButtonVariant, string> = {
    primary: 'bg-[#2F70AF] text-white hover:bg-blue-700',
    secondary: 'bg-white text-[#2F70AF] hover:bg-gray-200 shadow-lg'
  };

  const currentClasses = buttonVariantClasses[variant];

  return (
    <button className={`${baseClasses} ${currentClasses}`} {...rest}>
      {children}
    </button>
  );
};

export default Button;