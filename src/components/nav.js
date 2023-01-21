import React from 'react';
import { Link } from 'react-router-dom';
import { Fragment } from 'react';

let navStyle = {
  display: 'flex',
  position: 'static',
  width: '100vw',
  height: '10vh',
  backgroundColor: 'pink',
};
function Nav() {
  return (
    <Fragment>
      <nav style={navStyle}>
        <Link to={'/poopClicker'}>link to poopclicker</Link>
      </nav>
    </Fragment>
  );
}

export default Nav;
