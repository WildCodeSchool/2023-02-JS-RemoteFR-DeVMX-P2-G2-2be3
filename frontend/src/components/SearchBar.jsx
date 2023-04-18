/* eslint-disable import/no-unresolved */
import { PropTypes } from "prop-types";
import "../style/SearchBar.css";

function SearchBar({ setSearchInput }) {
  // const [searchInput, setSearchInput] = useState("");

  // const [updatedInput, setUpdatedInput] = useState("");

  // const handleClickSearchInput = (event) => {
  //   setSearchInput(event.target.value);
  // };

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
        // onClick={handleClickSearchInput}
        onKeyDown={handleKeyDown}
      />
    </div>
  );
}

SearchBar.propTypes = {
  setSearchInput: PropTypes.func.isRequired,
};

export default SearchBar;
