import React from 'react';
import { Link } from 'react-router-dom';

function NotFound() {
  return (
    <div>
      <h1>Not Found</h1>
      <p className='lead'> The page you are looking for does not exist </p>
      <Link to='/' className='btn btn-light'>
        Back to Search
      </Link>
    </div>
  );
}

export default NotFound;
