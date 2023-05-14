import React from 'react';
import { Pagination } from 'react-bootstrap';

const PaginationBar = ({ currentPage, pageCount, onPaginate }) => (
  <Pagination>
    <Pagination.First onClick={() => onPaginate(1)} />
    <Pagination.Prev onClick={() => onPaginate(currentPage > 1 ? currentPage - 1 : 1)} />
    {Array(pageCount).fill().map((_, idx) => {
        const pageNumber = idx + 1;
        const isInRange = pageNumber >= currentPage - 1 && pageNumber <= currentPage + 1;
        if (isInRange) {
        return (
            <Pagination.Item
            key={pageNumber}
            active={pageNumber === currentPage}
            onClick={() => onPaginate(pageNumber)}
            >
            {pageNumber}
            </Pagination.Item>
        );
        }
        return null;
    })}
    <Pagination.Next onClick={() => onPaginate(currentPage < pageCount ? currentPage + 1 : pageCount)} />
    <Pagination.Last onClick={() => onPaginate(pageCount)} />
  </Pagination>
);

export default PaginationBar;
