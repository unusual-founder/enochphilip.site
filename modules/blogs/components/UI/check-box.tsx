import { Checkbox, Label } from "flowbite-react";
import React from "react";

interface CheckBoxProps {
  label: string;
  id: string;
  name: string;
  checked: boolean;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function CheckBox({ label, id, name, checked, onChange }: CheckBoxProps) {
  return (
    <div className="flex items-center gap-2">
      <Checkbox
        id={id}
        name={name}
        checked={checked}
        onChange={onChange}
        className="text-blue-600 bg-white border-gray-300 dark:bg-[#1f1f1f] dark:border-gray-600 focus:ring-blue-500 dark:focus:ring-blue-400"
      />
      <Label
        htmlFor={id}
        className="text-sm text-gray-900 dark:text-[#E4E6EB]"
      >
        {label}
      </Label>
    </div>
  );
}
