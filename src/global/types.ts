export interface PaginationProps {
    next: string | null;
    onChangePage: (value: string | null) => void;
    previous: string | null;
}

export interface SearchProps {
    onSearch: (searchValue: string) => void;
    placeholder?: string;
    searchValue: string;
}

export interface StarShipResponseProps {
    count: number;
    next: string | null;
    previous: string | null;
    results: StarshipResultProps;
}

export interface StarshipResultProps {
    model: string;
    name: string;
    passengers: string;
    url: string;
}
