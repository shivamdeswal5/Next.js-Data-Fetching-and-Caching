import React from 'react'
import AddUser from '../../components/users/add-user-form'
import UserList from '@/components/users/user-list'

export default async function page() {
  return (
    <div>
      <h1>Server Side Data Fetching</h1>
      <AddUser />
      <UserList />
    </div>
  )
}
