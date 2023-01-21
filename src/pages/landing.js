import React from 'react';
import { Fragment } from 'react';
import Nav from '../components/nav';
import Welcome from '../components/welcomeSection';
import Main from '../components/main';

function Landing() {
  return (
    <Fragment>
      <Nav />
      {/* <Welcome /> */}
      <Main />
    </Fragment>
  );
}

export default Landing;
