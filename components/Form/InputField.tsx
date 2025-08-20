import React, { InputHTMLAttributes, TextareaHTMLAttributes } from 'react';
import Label from './Label';


interface IInputFieldBase {
  label: string;
  id: string;
  placeholder?: string;
}


interface IInputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, keyof IInputFieldBase>, IInputFieldBase {
  isTextArea?: false;
}

interface ITextareaProps extends Omit<TextareaHTMLAttributes<HTMLTextAreaElement>, keyof IInputFieldBase>, IInputFieldBase {
  isTextArea: true; 
}


type InputFieldProps = IInputProps | ITextareaProps;

const InputField = (props: InputFieldProps) => {
  const { label, id, placeholder, isTextArea, ...rest } = props;

  const baseClasses = 'w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500';

  return (
    <div>
      <Label htmlFor={id}>{label}</Label>
      {isTextArea ? (
        <textarea
          id={id}
          name={id}
          placeholder={placeholder}
          className={baseClasses}
          {...rest as TextareaHTMLAttributes<HTMLTextAreaElement>}
        />
      ) : (
        <input
          id={id}
          name={id}
          placeholder={placeholder}
          className={baseClasses}
          {...rest as InputHTMLAttributes<HTMLInputElement>}
        />
      )}
    </div>
  );
};

export default InputField;
