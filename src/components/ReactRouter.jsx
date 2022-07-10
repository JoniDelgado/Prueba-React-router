import React, { useState, useEffect } from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './Home';
import Layout from './Layout';
import NotFound from './NotFound';
import User from './User';
import Users from './Users';

export const ReactRouter = () => {
  const userURL = 'https://jsonplaceholder.typicode.com/users';

  const [users, setUsers] = useState([]);

  useEffect(() => {
    async function getUser() {
      try {
        const users = await fetch(userURL);
        const res = await users.json();
        setUsers(res);
      } catch (ex) {
        console.log(ex);
      }
    }

    getUser();
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Layout />}>
          <Route index element={<Home />} />
          <Route path='/users' element={<Users users={users} />} />
          <Route path='/users/:userId' element={<User users={users} />} />
          {/* </Route> */}
          <Route path='*' element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
};
