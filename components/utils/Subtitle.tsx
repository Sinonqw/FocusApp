import React, { ReactNode } from "react";

interface ISubtitle {
  children: ReactNode;
  variant?: 'black' | 'white';
}

const Subtitle = ({ children, variant = 'black' }: ISubtitle) => {
  const baseClasses = 'text-3xl sm:text-4xl font-bold mb-4 text-center';
  

  const subtitleVariantClasses = {
    black: 'text-gray-800', 
    white: 'text-white'  
  };

  
  const currentClasses = subtitleVariantClasses[variant];

  return (
    <h2 className={`${baseClasses} ${currentClasses}`}>
      {children}
    </h2>
  );
};

export default Subtitle;