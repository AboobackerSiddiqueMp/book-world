import React from 'react';
import Dropdown from 'react-bootstrap/Dropdown';
import { Link } from 'react-router-dom';
import './dropdown.css'; // Import your CSS file

function Dropdowns({ name }) {
  const handileclick=()=>{
    sessionStorage.removeItem("token")
    sessionStorage.removeItem("existinguser")

    window.location.reload(); // Refresh the page

  
  }
  return (
    <div className="custom-dropdown">
      <Dropdown>
        <Dropdown.Toggle variant="success" id="dropdown-basic" style={{color:'black'}}>
          {name}
        </Dropdown.Toggle>

        <Dropdown.Menu>
          <Link to={'/myshop'}>
            <Dropdown.Item href="#/action-1">orders</Dropdown.Item>
          </Link>
          <Dropdown.Item href="" onClick={handileclick}>logout</Dropdown.Item>
        </Dropdown.Menu>
      </Dropdown>
    </div>
  );
}

export default Dropdowns;
