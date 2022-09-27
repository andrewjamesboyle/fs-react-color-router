import React from 'react';
import { Link } from 'react-router-dom';
import './NotFound.css';

export default function NotFound() {
  return (
    <>
      <div className='not-found'>NOT FOUND</div>
      <Link to="/">Return Home</Link>
    </>
  );
}
