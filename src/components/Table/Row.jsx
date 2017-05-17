import React from 'react';

export default ({ item }) => (
  <tr>
    <td>{item.firstName}</td>
    <td>{item.lastName}</td>
    <td>{item.country}</td>
  </tr>
);
