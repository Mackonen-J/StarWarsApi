const Search = ({ searchValue, onSearch, ...props }) => {
  const handleSearch = (e) => onSearch(e?.target?.value);

  return (
    <div>
      <input value={searchValue} onChange={handleSearch} {...props} />
    </div>
  );
};

export default Search;
