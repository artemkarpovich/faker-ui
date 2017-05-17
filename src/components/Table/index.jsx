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
`;

export default ({ items, page, perPage, numberOfItems, onSetCurrentPage }) => (
  <Wrapper>
    <table>
      <tbody>
        <Header
          columns={columns}
        />
        {
          items.map(item => <Row item={item} key={item.id}/>)
        }
      </tbody>
    </table>

    <PaginationBlock
      page={page}
      perPage={perPage}
      numberOfItems={numberOfItems}
      onSetCurrentPage={onSetCurrentPage}
    />
  </Wrapper>
);
