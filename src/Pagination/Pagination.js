import React from "react";

const Pagination = ({ next, previous, onChangePage }) => {
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
