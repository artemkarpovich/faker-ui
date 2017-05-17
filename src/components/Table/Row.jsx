import React from 'react';
import styled from 'styled-components';

const Td = styled.td`
  width: calc(100% / 3);
`;

export default ({ item }) => (
  <tr>
    <Td>{item.firstName}</Td>
    <Td>{item.lastName}</Td>
    <Td>{item.country}</Td>
  </tr>
);
