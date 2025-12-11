import React from "react";

const TextInput = ({
  isDarkMode,
  value,
  handleInputChange,
  textarea = false,
  label,
  name, // <-- new: accept name
  id, // optional id override
  ...rest // forward any other props (e.g., placeholder, required)
}) => {
  const InputComponent = textarea ? "textarea" : "input";
  const inputId = id || name || label?.toLowerCase().replace(/\s+/g, "_");

  return (
    <div className="relative">
      <InputComponent
        id={inputId}
        name={name}
        // textarea doesn't need type prop
        {...(!textarea ? { type: "text" } : {})}
        className={`w-full px-4 pt-6 pb-2 rounded-xl border transition-all duration-200 outline-none resize-y text-lg ${
          isDarkMode
            ? "bg-gray-800/50 text-white border-gray-700 focus:border-blue-500 focus:bg-gray-800/70"
            : "bg-white/80 text-gray-900 border-gray-300 focus:border-blue-500 focus:bg-white"
        }`}
        value={value}
        onChange={({ target }) => handleInputChange(target.value)}
        {...rest}
      />

      <label
        htmlFor={inputId}
        className="text-sm absolute left-4 top-2 pointer-events-none origin-left"
      >
        {label}
      </label>
    </div>
  );
};

export default TextInput;
