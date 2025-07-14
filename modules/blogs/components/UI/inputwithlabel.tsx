import React from "react";
import { FloatingLabel } from "flowbite-react";

interface InputWithLabelProps {
  label: string;
  value?: string;
  name: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export default function InputWithLabel({
  label,
  value,
  name,
  onChange,
}: InputWithLabelProps) {
  return (
    <div className="w-full">
      <label
        htmlFor={name}
        className="block mb-1 text-sm font-medium text-gray-700 dark:text-gray-300"
      >
        {label}
      </label>
      <input
        id={name}
        name={name}
        type="text"
        value={value}
        onChange={onChange}
        className="w-full px-3 py-2 border rounded-md shadow-sm 
                   bg-white dark:bg-[#1f1f1f]
                   text-black dark:text-[#E4E6EB]
                   border-gray-300 dark:border-gray-700
                   focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
      />
    </div>
  );
}

