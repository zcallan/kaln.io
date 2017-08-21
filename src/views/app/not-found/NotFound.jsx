import './notFound.scss';
import React from 'react';
import { Link } from 'react-router-dom';


const NotFound = () => (
  <div className="not-found">
    <h1>Not found</h1>
    <Link to="/">Home</Link>
  </div>
);

export default NotFound;
