import React from 'react';
import styled from 'styled-components';

const Button = styled.button`
  padding: 7px 12px;
  margin-left: -1px;
  font-size: 13px;
  font-style: normal;
  font-weight: 600;
  color: ${props => props.current ? 'white' : '#0366d6'};
  white-space: nowrap;
  vertical-align: middle;
  cursor: pointer;
  background: #fff;
  border: 1px solid #e1e4e8;
  background-color:  ${props => props.current ? '#0366d6' : 'white'};
  border-color: ${props => props.current ? '#0366d6' : '#e1e4e8'};
`;

class PaginationBlock extends React.Component {
  render() {
    return (
      <div>
        <div>PaginationBlock</div>
        <Button>Previous</Button>
        <Button current>Next</Button>
      </div>
    );
  }
}

export default PaginationBlock;
