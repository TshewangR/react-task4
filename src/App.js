import React, { useEffect, useState } from 'react';

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUsers(data.users));
  }, []);

  return (
    <div>
      <h1>User Table</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Age</th>
            <th>Username</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.id}</td>
              <td>{user.firstName} {user.lastName}</td>
              <td>{user.email}</td>
              <td>{user.phone}</td>
              <td>{user.age}</td>
              <td>{user.username}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
