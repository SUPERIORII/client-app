"use client";

import React from "react";

const FormInput = ({
  label,
  name,
  type,
  placeholder,
  onChange,
  value,
  error,
  helperText,
}) => {
  return (
    <div className="w-full">
      <legend className="fieldset-legend text-sm text-black">{label}</legend>
      <input
        className={`w-full px-4 py-2 border rounded-xl outline-none transition duration-150
		bg-white text-gray-900 text-sm
		placeholder:text-gray-400
        ${
          error
            ? "border-red-500 focus:border-red-500"
            : "border-gray-300 focus:border-blue-500 focus:ring-1 focus:ring-blue-200"
        }
        `}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />

      {helperText && (
        <p className={`text-xs ${error ? "text-red-500" : "text-gray-500"}`}>
          {helperText}
        </p>
      )}
    </div>
  );
};

export default FormInput;
