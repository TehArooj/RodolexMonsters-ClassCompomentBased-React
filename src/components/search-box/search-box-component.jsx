import "./search-box.styles.css";
const SearchBox = ({ className, placeholder, onChangeHandler, name }) => {
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
