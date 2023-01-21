import React from 'react';
import { Fragment } from 'react';
import './welcome.css';

let mainStyle = {
  display: 'flex',
  position: 'relative',
  width: '100vw',
  height: '90vh',
  background: 'black',
  justifyContent: 'center',
  alignContent: 'center',
  color: 'white',
  fontSize: '10vh',
};

function Main() {
  return (
    <Fragment>
      <main style={mainStyle}>
        <header>Projects</header>
        <div className="projectContainer">
          <div className="project one"></div>
          <div className="project two"></div>
          <div className="project three"></div>
        </div>
      </main>
    </Fragment>
  );
}

export default Main;
