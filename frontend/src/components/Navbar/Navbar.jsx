import * as React from 'react';
import { Link } from 'react-router-dom';
import { Contacts, AddCircle } from '@mui/icons-material';
import './navbar.css'
function Navbar() {
  return (
    <nav >
      <h2 >
        <Link to='/'>
          &nbsp; Contact Manager
        </Link>
      </h2>

      <ul>
        <li>
        
          <Link to='/'>

            Contacts List
          </Link>
        </li>
        <li >
         
          <Link to='/add'>

            Add Contact
          </Link>
        </li>

      </ul>
    </nav>
  );
}

export default Navbar;