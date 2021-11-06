import { ChangeEventHandler, KeyboardEventHandler, useState } from "react";

import "./index.css";

const SEARCH_INPUT_PLACEHOLDER = "City (Seoul, London ...)";

type Props = {
  search: (city: string) => void;
};

const SearchBar = ({ search }: Props) => {
  const [searchCity, setSearchCity] = useState("");

  const onSearchCityChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setSearchCity(e.target.value);
  };

  const onKeyPress: KeyboardEventHandler = (e) => {
    if (e.key === "Enter") {
      search(searchCity);
    }
  };

  const onSubmit = () => {
    search(searchCity);
  };

  return (
    <section className="search-bar">
      <input
        className="search-bar__input search-bar__input--search-input"
        type="text"
        value={searchCity}
        onChange={onSearchCityChange}
        onKeyPress={onKeyPress}
        placeholder={SEARCH_INPUT_PLACEHOLDER}
      />
      <button
        className="search-bar__button search-bar__button--submit"
        onClick={onSubmit}
      >
        Search
      </button>
    </section>
  );
};

export default SearchBar;
