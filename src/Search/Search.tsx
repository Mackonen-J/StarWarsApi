import { SearchProps } from '../global/types';

const Search = ({ onSearch, placeholder, searchValue }: SearchProps) => {
    const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => onSearch(e?.target?.value);
    return <input value={searchValue} onChange={handleSearch} placeholder={placeholder ? placeholder : 'Search'} />;
};

export default Search;
