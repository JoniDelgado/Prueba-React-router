import React from 'react';
import { Link, Outlet } from 'react-router-dom';

const Layout = () => {
  return (
    <section
      style={{
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <main style={{ width: '50%' }}>
        <nav style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Link to='/'>
            <h2>Utilizando React router</h2>
          </Link>
          <ul
            style={{ padding: '0', display: 'flex', flexDirection: 'column' }}
          >
            <Link to='/'>Home</Link>
            <Link to='/users'>Users</Link>
          </ul>
        </nav>
      </main>
      <Outlet />
    </section>
  );
};

export default Layout;
