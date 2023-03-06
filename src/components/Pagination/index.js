import React from "react";
import { useState, useEffect } from "react";
import ReactPaginate from "react-paginate";

function Pagination({ itemsPerPage, itemSize }) {
  const [pageCount, setPageCount] = useState(0);
  const [itemOffset, setItemOffset] = useState(0);

  useEffect(() => {
	const endOffset = itemOffset + itemsPerPage;
	console.log(`Loading items from ${itemOffset} to ${endOffset}`);
	setPageCount(Math.ceil(itemSize / itemsPerPage));
      }, [itemOffset, itemsPerPage]);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % itemSize;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <div className="paginationWrap">
      <ReactPaginate
        breakLabel="..."
        nextLabel="next"
        onPageChange={handlePageClick}
        pageRangeDisplayed={4}
        pageCount={pageCount}
        previousLabel="prev"
        renderOnZeroPageCount={null}
	className={'pagination'}
      />
    </div>
  );
}

export default Pagination;
