import React from 'react'
import AddUser from '../../components/users/add-user-form'
import UserList from '@/components/users/user-list'
import { getUsers } from '@/actions/actions'


  type User = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  image: string;
  university: string;
};

export default async function page() {
  const users: User[] = await getUsers();



  return (
    <div>
      <h1>Server Side Data Fetching</h1>
      <AddUser />
      <UserList users={users} />
    </div>
  )
}
