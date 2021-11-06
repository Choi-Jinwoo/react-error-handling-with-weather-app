import { ChangeEventHandler } from "react";

const SEARCH_INPUT_PLACEHOLDER = "City (Seoul, London ...)";

type Props = {
  keyword: string;
  onChange: ChangeEventHandler;
};

const SearchBar = ({ keyword, onChange }: Props) => {
  return (
    <section className="search-bar">
      <input
        className="search-bar__input--search-input"
        type="text"
        value={keyword}
        onChange={onChange}
        placeholder={SEARCH_INPUT_PLACEHOLDER}
      />
      <button className="search-bar__button--submit">Search</button>
    </section>
  );
};

export default SearchBar;
