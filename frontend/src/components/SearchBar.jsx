import React from "react";
import { FaMagnifyingGlass } from "react-icons/fa6";
import { IoMdClose } from "react-icons/io";

const SearchBar = ({ value, onChange, handleSearch, onClearSearch }) => {
  return (
    <div className="w-72 flex relative">
      <input
        type="text"
        placeholder="Search..."
        className="w-full h-10 text-sm py-[11px] rounded-full border-none bg-white"
        value={value}
        onChange={onChange} // Pass the updated query to the parent
      />
      {value && (
        <IoMdClose
          className="absolute right-12 top-3 text-gray-400 hover:text-gray-800 cursor-pointer"
          onClick={onClearSearch} // Clear the search query
        />
      )}
      <FaMagnifyingGlass
        className="text-gray-400 cursor-pointer absolute right-6 top-3 hover:text-gray-800"
        onClick={handleSearch} // Trigger the search
      />
    </div>
  );
};

export default SearchBar;