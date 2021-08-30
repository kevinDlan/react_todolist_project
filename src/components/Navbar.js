import React from "react";
import {FaListAlt, FaCheckSquare, FaPlusSquare, FaTrash} from 'react-icons/fa';
import {NavLink} from 'react-router-dom';


const NavBar = ({onDeleteCompleted}) => (
  <footer
    className="d-flex justify-content-between bg-secondary p-3"
    id="mainFooter"
  >
    <div className="btn-group">
      <NavLink to="/not-completed" className="btn btn-outline-dark bg-light">
        <FaListAlt />
      </NavLink>
      <NavLink to="/completed" className="btn btn-outline-dark bg-light">
        <FaCheckSquare />
      </NavLink>
      <NavLink to="/add-task" className="btn btn-outline-dark bg-light">
        <FaPlusSquare />
      </NavLink>
    </div>
    <button className="btn btn-outline-dark bg-light" onClick = {onDeleteCompleted}>
      <FaTrash />
    </button>
  </footer>
  );


export default NavBar;
