import { Button, FileInput, HelperText, Label } from "flowbite-react";
import React, { useState } from "react";

interface ImageInputProps {
  onFileSelected: (file: File | null) => void;
}

export function ImageInput({ onFileSelected }: ImageInputProps) {
  const [fileName, setFileName] = useState<string | null>(null);

  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0] || null;
    setFileName(file?.name || null);
    onFileSelected(file);
  };

  return (
    <div className="flex flex-col gap-2">
      <Label className="text-gray-900 dark:text-[#E4E6EB]" htmlFor="file-upload-helper-text">
        Upload file
      </Label>

      <FileInput
        id="file-upload-helper-text"
        className="text-gray-900 dark:text-[#E4E6EB] dark:bg-[#121212] dark:border-gray-700"
        onChange={handleFileChange}
      />

      <HelperText className="text-gray-500 dark:text-gray-400">
        SVG, PNG, JPG or GIF (MAX. 800x400px).
      </HelperText>

      <Button
        color="light"
        className="dark:bg-[#1f1f1f] dark:text-[#E4E6EB] dark:border-gray-700"
        disabled={!fileName}
      >
        Upload
      </Button>

      {fileName && (
        <HelperText className="text-green-500">
          File selected: {fileName}
        </HelperText>
      )}
    </div>
  );
}
