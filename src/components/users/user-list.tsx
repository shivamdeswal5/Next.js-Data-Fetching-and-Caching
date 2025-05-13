'use client'

import React, { useState, useEffect } from 'react';
import { getUsers, deleteUser } from '@/actions/actions';
import style from './style.module.css';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  university: string;
};

export default function UserList() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    const fetchUsers = async () => {
      const fetchedUsers = await getUsers();
      setUsers(fetchedUsers);
    };

    fetchUsers();
  }, []); 

  const handleDelete = async (userId: number) => {
    const result = await deleteUser(userId);
    if (result) {
      setUsers((prevUsers) => prevUsers.filter(user => user.id !== userId));
    }
  };

  return (
    <div className={style.userList}>
      {users.map((user) => (
        <div key={user.id} className={style.userCard}>
          <h2>{`${user.firstName} ${user.lastName}`}</h2>
          <img src={user.image} height='150px' width='150px' alt={`${user.firstName} ${user.lastName}`} />
          <p className={style.description}>{user.university}</p>
          <p>{user.email}</p>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
