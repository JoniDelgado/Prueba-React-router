import React, { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

const Users = ({ users }) => {
  const [filteredUsers, setFilteredUsers] = useState(users);
  const [searchParams, setSearchParams] = useSearchParams();

  const handleOnChange = (e) => {
    const searchInput = e.target.value;

    setSearchParams({ filter: searchInput });

    const filterUsers = users.filter((user) =>
      user.name.toLowerCase().includes(searchInput)
    );

    setFilteredUsers(filterUsers);
  };

  return (
    <>
      <h1>Users</h1>
      <input
        type='text'
        placeholder='Buscar Usuario'
        onChange={handleOnChange}
        value={searchParams.get('filter') || ''}
      />
      <section style={{ display: 'flex' }}>
        <ul style={{ listStyle: 'none' }}>
          {filteredUsers.map((el) => (
            <li key={el.id}>
              <Link to={el.id.toString()}>
                <h3>{el.name}</h3>
              </Link>
            </li>
          ))}
        </ul>
      </section>
    </>
  );
};

export default Users;
