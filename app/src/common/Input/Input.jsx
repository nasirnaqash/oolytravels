import React from "react";

const Input = ({
  value,
  handleChange,
  handleBlur,
  name,
  placeholder,
  type,
  error,
  cx,
}) => {
  return (
    <div className={`${cx}`}>
      <input
        type={type}
        name={name}
        value={value}
        onChange={handleChange}
        onBlur={handleBlur}
        placeholder={placeholder}
        className={` border-3
          w-full h-20 
                text-2xl font-medium placeholder:text-gray-400
            px-6 leading-normal
            p-3 bg-white shadow    rounded-xl mt-2 ring-none outline-none focus:ring-gray-400
              ${error && "bg-red-50"}
            `}
      />
      {error && <div className="text-red-500 text-sm mt-1">{error}</div>}
    </div>
  );
};

export default Input;
