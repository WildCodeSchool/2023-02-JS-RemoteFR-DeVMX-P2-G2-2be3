import { PropTypes } from "prop-types";
import "../../../style/shopStyle/SearchBar.css";

function SearchBar({ setSearchInput }) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") setSearchInput(event.target.value);
  };
  return (
    <div>
      <input
        type="text"
        name=""
        id=""
        placeholder="Insérez le nom de votre article"
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

SearchBar.propTypes = {
  setSearchInput: PropTypes.func.isRequired,
};

export default SearchBar;
