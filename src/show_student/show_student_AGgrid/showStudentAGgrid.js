import React, { useEffect, useState, useRef } from 'react';
import { AgGridReact } from 'ag-grid-react';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import { Container, InputGroup, FormControl, Button } from 'react-bootstrap';

const ShowStudentAGgrid = () => {
  const [rowData, setRowData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const gridRef = useRef(null);
  const resizeTimeoutRef = useRef(null);

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then(response => response.json())
      .then(data => setRowData(data));
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
      resizeTimeoutRef.current = setTimeout(() => {
        if (gridRef.current) {
          gridRef.current.api.sizeColumnsToFit();
        }
      }, 100);
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      if (resizeTimeoutRef.current) {
        clearTimeout(resizeTimeoutRef.current);
      }
    };
  }, []);

  const handleSearch = () => {
    gridRef.current.api.setQuickFilter(searchText);
  };

  const columnDefs = [
    { headerName: 'Student Name', field: 'studentName', sortable: true, filter: true },
    { headerName: 'Email', field: 'email', sortable: true, filter: true },
    { headerName: 'Father Name', field: 'fatherName', sortable: true, filter: true },
    { headerName: 'Mother Name', field: 'motherName', sortable: true, filter: true },
    { headerName: 'Gender', field: 'gender', sortable: true, filter: true },
    { headerName: 'Date of Birth', field: 'dateOfBirth', sortable: true, filter: true },
    { headerName: 'Department', field: 'department', sortable: true, filter: true },
    { headerName: 'Mobile Number', field: 'mobileNumber', sortable: true, filter: true },
  ];

  const defaultColDef = {
    sortable: true,
    filter: true,
    resizable: true,
    flex: 1,
  };

  return (
    <Container>
      <h2>Students Data</h2>
      <InputGroup className="mb-3">
        <FormControl
          placeholder="Search..."
          className='col-3'
          value={searchText}
          onChange={(e) => setSearchText(e.target.value)}
        />
        <Button variant="outline-secondary" onClick={handleSearch}>Search</Button>
      </InputGroup>
      <div className="ag-theme-alpine" style={{ height: '522px', width: '100%', border: '1px solid #ccc' }}>
        <AgGridReact
          ref={gridRef}
          rowData={rowData}
          columnDefs={columnDefs}
          defaultColDef={defaultColDef}
          suppressResize={true}
          suppressHorizontalScroll={true}
          pagination={true}
          paginationPageSize={10}
        />
      </div>
    </Container>
  );
};

export default ShowStudentAGgrid;
