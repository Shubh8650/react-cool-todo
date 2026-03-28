import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";
import "../styles/SearchTodo.css";
import { IoSearch } from "react-icons/io5";

const SearchTodo = ({ setSearchText }) => {
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    setSearchText(debouncedValue);
  }, [debouncedValue, setSearchText]);

  return (
    <div className="search-wrapper">
      <input
        className="search-input"
        type="text"
        placeholder="Search your task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <IoSearch className="search-icon" />
    </div>
  );
};

export default SearchTodo;
