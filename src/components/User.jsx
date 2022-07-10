import React from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const User = ({ users }) => {
  const param = useParams();
  const route = param.userId;

  const navigate = useNavigate();
  const user = users[route - 1];

  const handleButtonClick = (e) => navigate('/users');

  return (
    <div>
      <h2>{user.name}</h2>
      <hr />
      <div>
        <strong>Phone Number: </strong>
        {user.phone}
      </div>
      <br />
      <div>
        <strong>Web site: </strong>
        {user.website}
      </div>
      <br />
      <div>
        <strong>Email: </strong>
        {user.email}
      </div>
      <br />
      <button onClick={handleButtonClick}>Volver</button>
    </div>
  );
};

export default User;
