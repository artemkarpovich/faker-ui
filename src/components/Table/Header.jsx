import React from 'react';

export default ({ columns }) => (
  <tr>
    {
      columns.map(column => <th key={column}>{column}</th>)
    }
  </tr>
);
