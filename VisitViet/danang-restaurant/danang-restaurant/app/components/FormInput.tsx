import type { FocusEvent } from "react";
import { useEffect, useState, forwardRef } from "react";

type FormInputProps = {
  name: string;
  type?: 'text' | 'number' | 'email' | 'date' | 'password';
  error?: string | null | undefined;
  label?: string;
  required?: boolean;
  defaultValue?: string;
  min?: number;
  max?: number;
  step?: string | number | undefined;
  placeholder?: string;
  wrapperClass?: string;
  onBlur?: (event: FocusEvent<HTMLInputElement>) => void;
};

const FormInput = forwardRef(({
  name,
  error,
  type = 'text',
  label = 'Label',
  required = false,
  defaultValue = '',
  min,
  max,
  step,
  placeholder,
  wrapperClass,
  onBlur,
}: FormInputProps, ref: any) => {
  const [warningMsg, setWarningMsg] = useState('');

  // TODO: Make it more flexible
  useEffect(() => {
    if (name === 'seoTitle') {
      const MAX_LEN = 70;
      if (defaultValue.length > MAX_LEN) {
        setWarningMsg(`Too long, max length should be ${MAX_LEN}`);
      }
    }
  }, [defaultValue, name]);

  return (
  <div className={wrapperClass ?? ''}>
    <label
      htmlFor={name}
      className="block text-sm font-medium text-gray-700 dark:text-neutral-300"
    >
      {label}
    </label>
    <div className="mt-1">
      <input
        ref={ref}
        defaultValue={defaultValue}
        onBlur={onBlur}
        required={required}
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        min={min}
        max={max}
        step={step}
        autoComplete={name}
        aria-invalid={error ? true : undefined}
        aria-describedby={`${name}-error`}
        className={`w-full rounded border border-gray-300 px-2 py-1 text-lg dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white ${warningMsg ? 'border-amber-400' : ''}`}
      />
      {warningMsg && (
        <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3">
          <span className="block w-[20px] h-[20px] text-center text-black rounded-full bg-amber-400 leading-[20px]">!</span>
        </div>
      )}
      {error && (
        <div className="pt-1 text-red-700" id={`${name}-error`}>
          {error}
        </div>
      )}
    </div>
    {warningMsg && (
      <div className="pt-1 text-xs text-amber-500">
        {warningMsg}
      </div>
    )}
  </div>
)
});

FormInput.displayName = 'FormInput';

export { FormInput };
