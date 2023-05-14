import React from 'react';
import { Table } from 'react-bootstrap';
import TableRow from './tableRow';

const TableComponent = ({ rows, editingId, onEdit, editData }) => (
  <div className="table-responsive">
    <Table striped bordered hover>
      <thead>
        <tr>
          <th>Student Name</th>
          <th>Email</th>
          <th>Father Name</th>
          <th>Mother Name</th>
          <th>Gender</th>
          <th>Date of Birth</th>
          <th>Department</th>
          <th>Mobile Number</th>
        </tr>
      </thead>
      <tbody>
        {rows.map((row, index) => (
          <TableRow
            key={index}
            row={row}
            editingId={editingId}
            onEdit={onEdit}
            editData={editData}
          />
        ))}
      </tbody>
    </Table>
  </div>
);

export default TableComponent;
