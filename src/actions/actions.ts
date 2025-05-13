'use server';

export async function getUsers() {
  try {
    const res = await fetch('https://dummyjson.com/users?limit=10',{next: { revalidate: 3600 }});
    const data = await res.json();
    return data.users;
  } catch (error) {
    console.error('Error fetching users:', error);
    return [];
  }
}


export async function addUser(formData: FormData) {
  const name = formData.get('name') as string;
  const email = formData.get('email') as string;
  if (!name || !email) {
    console.error('no name or email');
    return null;
  }
  try {
    const res = await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        firstName:name,
        email
      }),
    });

    const data = await res.json();
    if (!res.ok) {
      console.error('Failed to add user:', data);
      return null;
    }
    console.log('User added successfully:', data);
    return data;
  } catch (error) {
    console.error('Error adding user:', error);
    return null;
  }
}

export async function deleteUser(userId: number) {
  try {
    const res = await fetch(`https://dummyjson.com/users/${userId}`, {
      method: 'DELETE',
    });

    if (res.ok) {
      const result = await res.json();
      console.log('User deleted successfully:', result);
      return result;
    } else {
      console.error('Failed to delete user');
      return null;
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    return null;
  }
}