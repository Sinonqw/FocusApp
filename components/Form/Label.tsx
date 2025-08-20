import React, { LabelHTMLAttributes, ReactNode } from 'react';


interface ILabelProps extends LabelHTMLAttributes<HTMLLabelElement> {
  children: ReactNode;
}

const Label = ({ children, ...rest }: ILabelProps) => {
  return (
    <label className='block text-sm font-medium text-gray-700 mb-1' {...rest}>
      {children}
    </label>
  );
};

export default Label;
