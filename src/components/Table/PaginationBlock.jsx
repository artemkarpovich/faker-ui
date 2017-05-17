import React from 'react';
import styled from 'styled-components';
import range from 'lodash/range';

const PaginationList = styled.ul`
  display: flex;
  margin-top: 20px;
  margin-bottom: 20px;
  list-style-type: none;
  border-radius: 4px;
`;

const Button = styled.a`
  padding: 7px 12px;
  margin-left: -1px;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  color: ${props => props.active ? 'white' : '#0366d6'};
  white-space: nowrap;
  cursor: pointer;
  background: #fff;
  border: 1px solid #e1e4e8;
  background-color:  ${props => props.active ? '#0366d6' : 'white'};
  border-color: ${props => props.active ? '#0366d6' : '#e1e4e8'};

  &:hover {
    box-shadow: inset 1px 1px 2px rgba(0,0,0,0.1);
  }
`;

const InactiveButton = styled(Button)`
  color: gray;
  cursor: default;
  background-color: #fafbfc;
`;

export default ({ page, perPage, numberOfItems, onSetCurrentPage }) => {
  const getPages = (numberOfItems, currentPage, perPage, totalPages) => {
    let startPage, endPage;

    if (totalPages <= 10) {
      startPage = 1;
      endPage = totalPages;
    } else {
      if (currentPage <= 6) {
        startPage = 1;
        endPage = 10;
      } else if (currentPage + 4 >= totalPages) {
        startPage = totalPages - 9;
        endPage = totalPages;
      } else {
        startPage = currentPage - 5;
        endPage = currentPage + 4;
      }
    }

    const pages = range(startPage, endPage + 1);

    return pages;
  }

  const totalPages = Math.floor(numberOfItems / perPage);
  const pages = getPages(numberOfItems, page, perPage, totalPages);

  return (
    <PaginationList>
      <li>
        {
          page === 1 ? 
            <InactiveButton
              onClick={page === 1 ? false : () => onSetCurrentPage(1)}
            >
              First
            </InactiveButton> :
            <Button
              onClick={page === 1 ? false : () => onSetCurrentPage(1)}
            >
              First
            </Button>
        }
      </li>
      <li>
        {
          page === 1 ? 
            <InactiveButton
              onClick={page === 1 ? false : () => onSetCurrentPage(page - 1)}
            >
              Previous
            </InactiveButton> :
            <Button
              onClick={page === 1 ? false : () => onSetCurrentPage(page - 1)}
            >
              Previous
            </Button>
        }
      </li>
      {
        pages.map(item => (
          <li key={item}>
            <Button
              active={item === page}
              onClick={() => onSetCurrentPage(item)}
            >
              {item}
            </Button>
          </li>
        ))
      }
      <li>
        {
          page === totalPages ? 
            <InactiveButton
              onClick={page === totalPages ? false : () => onSetCurrentPage(page + 1)}
            >
              Next
            </InactiveButton> :
            <Button
              onClick={page === totalPages ? false : () => onSetCurrentPage(page + 1)}
            >
              Next
            </Button>
        }
      </li>
      <li>
        {
          page === totalPages ? 
            <InactiveButton
              onClick={page === totalPages ? false : () => onSetCurrentPage(totalPages)}
            >
              Last
            </InactiveButton> :
            <Button
              onClick={page === totalPages ? false : () => onSetCurrentPage(totalPages)}
            >
              Last
            </Button>
        }
      </li>
    </PaginationList>
  );
}
  