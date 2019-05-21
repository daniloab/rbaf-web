import React, { Component } from 'react';
import styled from 'styled-components'

import global from '../helpers/Global'

const StyledTable = styled.table`
    width: 100%;  
    color: #333;
    border-collapse: collapse;
    font-size: 1.4rem;
      
    thead {    
        border-bottom: .1rem solid lightgray;
    }
    
    th {
      text-align: center;
      padding: .8rem;
    }

    tbody tr:nth-child(even) {
        background-color: #fff
      }
    
    tbody tr td {
        padding: 2rem;
    }

    tbody>tr:hover {
      background: ${global.style.primaryColor};
      color: ${global.style.secondaryColor};
      font-weight: bold;
      cursor: pointer;
    }
    
    td {
      text-align: center;
    }
    
  } 
`;

const TdCircleStatus = styled.td`
  display: flex;
  justify-content: center;
`

const CircleStatus = ({ children, i, ...props }) => {
  return (
    <TdCircleStatus>
      {
        props.squad === 1 ? 'Ataque' :
        props.squad === 2 ? 'Defesa' :
        props.squad === 3 && 'Times Especiais'
      }
    </TdCircleStatus>
  )
}

export default class TableCoaches extends Component {
  renderHeaders() {
    const headers = this.props.headers || []
    return headers.map((h, i) => (
      <th key={i}>{h}</th>
    ))
  }

  renderRows() {
    const rows = this.props.rows || []
    return rows.map((r, i) => (
      <>
        <tr key={r.node._id}>
          <CircleStatus squad={r.squad} />
          <td>{r.node.name}</td>
          <td>{r.node.lastname}</td>
          <td>{r.node.job}</td>
          <td>{r.node.document}</td>
        </tr>
      </>
    ))
  }

  render() {
    return (
      <StyledTable>
        <thead>
          <tr>
            {this.renderHeaders()}
          </tr>
        </thead>
        <tbody>
          {this.renderRows()}
        </tbody>
      </StyledTable >
    );
  }
}