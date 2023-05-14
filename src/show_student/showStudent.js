import React, { useEffect, useState, useCallback } from 'react';
import { Container } from 'react-bootstrap';
import SearchBar from './searchBar';
import TableComponent from './tableComponent';
import PaginationBar from './pagination';

const ShowStudent = () => {
  const [rowData, setRowData] = useState([]);
  const [filteredData, setFilteredData] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [editingId, setEditingId] = useState(null);
  const [editData, setEditData] = useState({});

  const rowsPerPage = 10;

  useEffect(() => {
    fetch("http://localhost:3000/students")
      .then(response => response.json())
      .then(data => {
        setRowData(data);
        setFilteredData(data);
      });
  }, []);

  const handleSearch = useCallback(() => {
    const filtered = rowData.filter(row =>
      Object.values(row).some(value =>
        value.toString().toLowerCase().includes(searchText.toLowerCase())
      )
    );
    setFilteredData(filtered);
    setCurrentPage(1);
  }, [rowData, searchText]);

  useEffect(() => {
    handleSearch();
  }, [searchText, handleSearch]);

  const indexOfLastRow = currentPage * rowsPerPage;
  const indexOfFirstRow = indexOfLastRow - rowsPerPage;
  const currentRows = filteredData.slice(indexOfFirstRow, indexOfLastRow);

  const paginate = pageNumber => setCurrentPage(pageNumber);

  const pageCount = Math.ceil(filteredData.length / rowsPerPage);

  const handleEdit = (id, field, value) => {
    setEditData({ ...editData, [field]: value });
    setEditingId(id);
  };

  const handleSave = () => {
    fetch(`http://localhost:3000/students/${editingId}`, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(editData),
    })
      .then(response => response.json())
      .then(data => {
        setRowData(rowData.map(row => row.id === editingId ? data : row));
        setEditingId(null);
        setEditData({});
      });
  };

  const handleDelete = (id) => {
    fetch(`http://localhost:3000/students/${id}`, {
      method: 'DELETE',
    })
      .then(() => {
        setRowData(rowData.filter(row => row.id !== id));
      });
  };

  return (
    <Container>
      <SearchBar 
        searchText={searchText} 
        onSearchChange={setSearchText} 
        onSearchClick={handleSearch}
        onSave={handleSave}
        onDelete={handleDelete}
        editingId={editingId}
      />
      <TableComponent
        rows={currentRows}
        editingId={editingId}
        onEdit={handleEdit}
        editData={editData}
      />
      <PaginationBar 
        currentPage={currentPage}
        pageCount={pageCount}
        onPaginate={paginate}
      />
    </Container>
  );
};

export default ShowStudent;
