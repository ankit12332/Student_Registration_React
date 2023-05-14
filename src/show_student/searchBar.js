import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ searchText, onSearchChange, onSearchClick, onSave, onDelete, editingId, onGeneratePDF }) => (
  <div className="container mb-3 mt-3 p-3" style={{backgroundColor:'#000'}}>
    <div className="row">
      <div className="col-lg-3 col-md-6 col-sm-12">
        <InputGroup className="">
          <FormControl
            placeholder="Search..."
            value={searchText}
            onChange={(e) => onSearchChange(e.target.value)}
          />
          <Button variant="outline-secondary" onClick={onSearchClick}>
            Search
          </Button>
        </InputGroup>
      </div>
      <div className="col-lg-3 col-md-3 col-sm-3">
        <Button
          className='col-3 btn btn-info'
          disabled={editingId === null}
          onClick={onSave}
        > Update
        </Button>
        <Button
          className='col-3 btn btn-danger'
          style={{ marginLeft: '10px' }}
          disabled={editingId === null}
          onClick={() => onDelete(editingId)}
        >
          Delete
        </Button>
        <Button
          className='col-lg-5 btn btn-primary'
          style={{ marginLeft: '10px' }}
          onClick={onGeneratePDF}
        >
          Generate PDF
        </Button>
      </div>
    </div>
  </div>
);

export default SearchBar;
