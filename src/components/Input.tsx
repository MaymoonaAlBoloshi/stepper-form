import React from 'react';

type InputProps = {
  type: string; // 'text' | 'email' | 'password' | 'tel'
  label: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  placeholder?: string;
};

const Input: React.FC<InputProps> = ({ type, label, value, onChange, required, placeholder }) => {
  return (
<>
      <label>{label}</label>
      <input
        type={type}
        value={value}
        onChange={onChange}
        required={required}
        placeholder={placeholder}
      />
</>
  );
};

export default Input;
