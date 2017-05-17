import React from 'react';
import Header from './Header';
import Row from './Row';
import PaginationBlock from './PaginationBlock';
import styled from 'styled-components';

const columns = ['FirstName', 'LastName', 'Country'];

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-top: 20px;
  padding: 10px;
`;

const Table = styled.table`
  width: 100%;
  max-width: 100%;
  margin-bottom: 10px;
  background-color: #fff;
  border: 2px solid #dcdcdc;
  border-radius: 3px;

  > tbody > tr > td, > thead > tr > th {
    padding: 8px;
    line-height: 1.42857143;
    vertical-align: top;
    border-top: 2px solid #ddd;
  }

  > th {
    text-align: left;
  }

  > thead tr:first-child th {
    border-top: 0;
  }
`;

export default ({ items, page, perPage, numberOfItems, onSetCurrentPage, allIds }) => (
  <Wrapper>
    <Table>
      <thead>
        <Header
          columns={columns}
        />
      </thead>
      <tbody>
        {
          allIds.map(id => <Row item={items[id]} key={id}/>)
        }
      </tbody>
    </Table>

    <PaginationBlock
      page={page}
      perPage={perPage}
      numberOfItems={numberOfItems}
      onSetCurrentPage={onSetCurrentPage}
    />
  </Wrapper>
);
