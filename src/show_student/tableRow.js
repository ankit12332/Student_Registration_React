import React from 'react';
import { FormControl } from 'react-bootstrap';

const TableRow = ({ row, editingId, onEdit, editData }) => (
  <tr onClick={() => onEdit(row.id)}>
    {Object.keys(row).filter(key => key !== 'id').map((key, index) => (
      <td key={index}>
        <div className="table-cell-content">
          {editingId === row.id ? (
            <FormControl
              className="edit-input"
              value={editData[key] || row[key]}
              onChange={(e) =>
                onEdit(row.id, key, e.target.value)
              }
            />
          ) : (
            row[key]
          )}
        </div>
      </td>
    ))}
  </tr>
);

export default TableRow;
