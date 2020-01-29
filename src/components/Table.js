import React from 'react';
import TableRow from './TableRow'
import 'bootstrap/dist/css/bootstrap.min.css'
class Table extends React.Component{
  render(){
    return(
      <table class="table table-striped">
        <thead className="table table-dark">
          <tr>
            <th>Defect Category</th>
            <th>Description</th>
            <th>Priority</th>
            <th>Status</th>
            <th>Change Status</th>
          </tr>
        </thead>
        <tbody>
          
            <TableRow defectcat='UI' desc='Submit button coming to the extreme left.Refer the screenshots' priority='2' status='open' change='Close Defect'/>
            <TableRow defectcat='Functional' desc='While submitting the form data, a confirmation popup should appear. Refer the SRS document.' priority='1' status='open' change='Close Defect'/>
            <TableRow defectcat='Change Request' desc='Add remove user functionality' priority='3' status='closed' change='No action pending'/>
            
            
        </tbody>
    </table>
    )
  }
}
export default Table;