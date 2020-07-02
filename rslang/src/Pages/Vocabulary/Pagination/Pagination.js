import React from 'react';
import {
  BrowserRouter as Router,
  Link
} from 'react-router-dom';

const Pagination = ({ postsPerPage, totalPosts, paginate }) => {
  const pageNumbers = [];

  for(let i = 1; i <= Math.ceil(totalPosts / postsPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <Router>
      <nav className="nav justify-content-center mb-4">
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className="page-item">
            <Link to="!#" onClick={() => paginate(number)} className="page-link">
              {number}
            </Link>
          </li>
        ))}
      </ul>
    </nav>
    </Router>
    
    )
}

export default Pagination
