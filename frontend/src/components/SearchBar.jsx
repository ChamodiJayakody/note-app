import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-80 flex  px-4 relative">
      <input
        type="text"
        placeholder="Search Notes..."
        className="w-full h-10 text-sm  py-[11px] rounded-lg border-none bg-gray-100 "
        value={value}
        onChange={onChange}
      />

      {value && (
        <IoMdClose
          className="absolute right-12 top-3 text-gray-400 hover:text-gray-800 cursor-pointer "
          onClick={onClearSearch}
        />
      )}

      <FaMagnifyingGlass
        className="text-gray-400  cursor-pointer absolute right-6 top-3 hover:text-gray-800"
        onClick={handleSearch}
      />
    </div>
  );
};

export default SearchBar;
