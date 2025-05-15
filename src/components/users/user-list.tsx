'use client';

import React, { useState } from 'react';
import { deleteUser } from '@/actions/actions';
import style from './style.module.css';
import Image from 'next/image';

export type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  university: string;
};

type Props = {
  users: User[];
};

export default function UserList({ users }: Props) {
  const [userList, setUserList] = useState<User[]>(users);

  const handleDelete = async (userId: number) => {
    const result = await deleteUser(userId);
    if (result) {
      setUserList((prevUsers) => prevUsers.filter(user => user.id !== userId));
    }
  };

  return (
    <div className={style.userList}>
      {userList.map((user) => (
        <div key={user.id} className={style.userCard}>
          <h2>{user.firstName} {user.lastName}</h2>
          <Image
            src={user.image}
            height={150}
            width={150}
            alt={`${user.firstName} ${user.lastName}`}
          />
          <p className={style.description}>{user.university}</p>
          <p>{user.email}</p>
          <button onClick={() => handleDelete(user.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}
