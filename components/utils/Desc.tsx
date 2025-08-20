import React, { ReactNode } from "react";

interface IDesc {
  children: ReactNode;
  variant?: 'gray' | 'white';
}

const Desc = ({ children, variant = 'gray' }: IDesc) => {
  const baseClasses = 'text-base md:text-lg max-w-2xl mx-auto';

  const descVariantClasses = {
    gray: 'text-gray-600',
    white: 'text-white'
  };
  const currentClasses = descVariantClasses[variant];

  return (
    <p className={`${baseClasses} ${currentClasses}`}>
      {children}
    </p>
  );
};

export default Desc;