import { useRef } from "react";
import {
  ClearFilters,
  FilterContainer,
  FilterItem,
  FilterLabel,
  FilterOptions,
  FilterSelect,
  FilterTitle,
  FilterWrapper,
} from "./filterElements";

const FilterFunction = (data) => {
  const PlatformSelectRef = useRef();
  const GenreSelectRef = useRef();
  const { gameList, setGamesToDisplay } = data;
  const handlePlatformChange = (val) => {
    GenreSelectRef.current.value = "Genre";
    var newData = gameList.filter((current) => {
      if (current.platform.includes(val)) return current.platform;
    });
    console.log(newData);
    setGamesToDisplay(newData);
    PlatformSelectRef.current.blur();
  };

  const handleGenreChange = (val) => {
    PlatformSelectRef.current.value = "Platform";
    var newData = gameList.filter((current) => {
      if (current.genre.includes(val)) return current.platform;
    });
    console.log(newData);
    setGamesToDisplay(newData);
    GenreSelectRef.current.blur();
  };
  const ClearFilter = () => {
    setGamesToDisplay(gameList)
    GenreSelectRef.current.value = "Genre";
    PlatformSelectRef.current.value = "Platform";
  }
  const date = new Date();
  const year = date.getFullYear();
  return (
    <>
      <FilterTitle>Best Free games in {year}</FilterTitle>
      <FilterContainer>
        <FilterWrapper>
          <FilterItem>
            <FilterLabel>Platform :</FilterLabel>
            <FilterSelect
              defaultValue="Platform"
              onChange={(e) => handlePlatformChange(e.target.value)}
              ref={PlatformSelectRef}
            >
              <FilterOptions
                value="Platform"
                disabled
                style={{ display: "none" }}
              >
                Platform
              </FilterOptions>
              <FilterOptions value="Windows">Windows (PC)</FilterOptions>
              <FilterOptions value="Browser">Browser (Web)</FilterOptions>
            </FilterSelect>
          </FilterItem>
          <FilterItem>
            <FilterLabel>Genre :</FilterLabel>
            <FilterSelect
              defaultValue="Genre"
              onChange={(e) => handleGenreChange(e.target.value)}
              ref={GenreSelectRef}
            >
              <FilterOptions value="Genre" disabled style={{ display: "none" }}>
                Genre
              </FilterOptions>
              <FilterOptions value="MMO">MMO</FilterOptions>
              <FilterOptions value="MMORPG">MMORPG</FilterOptions>
              <FilterOptions value="Shooter">Shooter</FilterOptions>
              <FilterOptions value="Strategy">Strategy</FilterOptions>
              <FilterOptions value="Moba">Moba</FilterOptions>
            </FilterSelect>
          </FilterItem>
          <FilterItem>
            <ClearFilters onClick={ClearFilter}>Clear</ClearFilters>
          </FilterItem>
        </FilterWrapper>
      </FilterContainer>
    </>
  );
};

export default FilterFunction;
