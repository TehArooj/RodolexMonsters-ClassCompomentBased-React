import "./search-box.styles.css";
import { ChangeEvent, ChangeEventHandler } from "react";
type IsearchBox = {
  className: string;
  placeholder?: string;
  onChangeHandler: ChangeEventHandler<HTMLInputElement>;
  // define your own function
  // onChangeHandler:(event: ChangeEvent<HTMLInputElement>)=>void;
  name: string;
};

const SearchBox = ({
  className,
  placeholder,
  onChangeHandler,
  name,
}: IsearchBox) => {
  // explicit return
  return (
    <input
      className={`search-box ${className}`}
      type="search"
      name={name}
      placeholder={placeholder}
      onChange={onChangeHandler}
    />
  );
};
export default SearchBox;
