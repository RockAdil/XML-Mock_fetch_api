import React, { useEffect, useState } from 'react';

import lists from './Lists';

const FormProvider = () => {
  const [Users, setUsers] = useState([]);

  // XML HTTP Request
  useEffect(() => {
    var request = new XMLHttpRequest();

    request.open('GET', 'https://jsonplaceholder.typicode.com/users', true);

    request.onload = () => {
      if (request.readyState === 4 && request.status === 200) {
        setUsers(JSON.parse(request.responseText));
      } else {
        console.log('Error');
      }
    };

    request.onerror = (err) => {
      console.log(err);
    };

    request.send();
  }, []);

  return (
    <div className='container' style={{ marginTop: '5rem' }}>
      <table className='table table-bordered table-striped'>
        <thead>
          <tr>
            {lists.map((list) => (
              <th key={list.id}>{list.label}</th>
            ))}
          </tr>
        </thead>

        <tbody>
          {Users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.name}</td>
              <td>{user.username}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default FormProvider;
