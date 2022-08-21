import { PaginationProps } from '../global/types';

const Pagination = ({ next, previous, onChangePage }: PaginationProps) => {
    return (
        <>
            <button disabled={!next} onClick={() => onChangePage(next)}>
                Next
            </button>
            <button disabled={!previous} onClick={() => onChangePage(previous)}>
                Previous
            </button>
        </>
    );
};

export default Pagination;
