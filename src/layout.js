import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { Outlet } from 'react-router';
import NavBarTop from './components/navBarTop';

const Layout = () => (
  <div>
    <div>
      <NavBarTop />
    </div>
    <Outlet />
  </div>
);

export default Layout;
