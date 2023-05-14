import React from 'react';
import { InputGroup, FormControl, Button } from 'react-bootstrap';

const SearchBar = ({ searchText, onSearchChange, onSearchClick, onSave, onDelete, editingId }) => (
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
      </div>
    </div>
  </div>
);

export default SearchBar;
