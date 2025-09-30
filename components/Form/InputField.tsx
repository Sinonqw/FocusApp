import React, { InputHTMLAttributes, TextareaHTMLAttributes } from "react";
import Label from "./Label";

interface IInputFieldBase {
  label: string;
  id: string;
  placeholder?: string;
}

interface IInputProps
  extends Omit<
      InputHTMLAttributes<HTMLInputElement>,
      "value" | "onChange" | keyof IInputFieldBase
    >,
    IInputFieldBase {
  isTextArea?: false;

  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

interface ITextareaProps
  extends Omit<
      TextareaHTMLAttributes<HTMLTextAreaElement>,
      "value" | "onChange" | keyof IInputFieldBase
    >,
    IInputFieldBase {
  isTextArea: true;

  value?: string | number | readonly string[];
  onChange?: React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>;
}

type InputFieldProps = IInputProps | ITextareaProps;

const InputField = (props: InputFieldProps) => {
  const { label, id, placeholder, isTextArea, name, value, onChange, ...rest } =
    props;

  const baseClasses =
    "w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500";

  const inputName = name || id;

  return (
    <div className="mb-4 text-black">
      {" "}
      <Label htmlFor={id}>{label}</Label>
      {isTextArea ? (
        <textarea
          id={id}
          name={inputName}
          placeholder={placeholder}
          className={baseClasses}
          value={value as string}
          onChange={onChange}
          {...(rest as Omit<
            TextareaHTMLAttributes<HTMLTextAreaElement>,
            keyof InputFieldProps
          >)}
        />
      ) : (
        <input
          id={id}
          name={inputName}
          placeholder={placeholder}
          className={baseClasses}
          value={value}
          onChange={onChange}
          {...(rest as Omit<
            InputHTMLAttributes<HTMLInputElement>,
            keyof InputFieldProps
          >)}
        />
      )}
    </div>
  );
};

export default InputField;
