import { useEffect, useState } from "react";
import useDebounce from "./useDebounce";

const SearchTodo = ({ setSearchText }) => {
  const [value, setValue] = useState("");

  const debouncedValue = useDebounce(value, 500);

  useEffect(() => {
    setSearchText(debouncedValue);
  }, [debouncedValue, setSearchText]);

  return (
    <>
      <input
        type="text"
        placeholder="Search your task..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
    </>
  );
};

export default SearchTodo;
