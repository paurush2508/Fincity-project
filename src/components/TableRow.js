import React from 'react';
class TableRow extends React.Component{
  render(){
    return(
      <tr>
        <td>{this.props.defectcat}</td>
        <td>{this.props.desc}</td>
        <td>{this.props.priority}</td>
        <td>{this.props.status}</td>
        <td>{this.props.change}</td>
      </tr>
    )
  }
}
export default TableRow;