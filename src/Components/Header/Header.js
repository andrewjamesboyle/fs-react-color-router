import React from 'react';
import { NavLink } from 'react-router-dom';

export default function Header() {
  return (
    <div>
      <NavLink to="/rgb/255/0/0">RED</NavLink>
      <NavLink to="/rgb/0/255/0">GREEN</NavLink>
      <NavLink to="/rgb/0/0/255">BLUE</NavLink>
    </div>
  );
}
