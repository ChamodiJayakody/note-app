import { TextInput } from "flowbite-react";
import React, { useState } from "react";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";

const PasswordInput = ({ value, onChange, placeholder }) => {
  const [isShowPassword, setIsShowPassword] = useState(false);

  const toggleShowPassword = () => {
    setIsShowPassword(!isShowPassword);
  };

  return (
    <div className="relative ">
      <TextInput
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        type={isShowPassword ? "text" : "password"}
        className="form-control "
      />

      {isShowPassword ? (
        <FaRegEye
          size={22}
          className="text-gray-400 cursor-pointer absolute right-3 top-3"
          onClick={() => toggleShowPassword()}
        />
      ) : (
        <FaRegEyeSlash
          size={22}
          className="text-gray-400 cursor-pointer absolute right-3 top-3"
          onClick={() => toggleShowPassword()}
        />
      )}
    </div>
  );
};

export default PasswordInput;
