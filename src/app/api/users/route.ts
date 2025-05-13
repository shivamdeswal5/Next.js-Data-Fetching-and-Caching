import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const res = await fetch('https://dummyjson.com/users?limit=10');
    const data = await res.json();
    return NextResponse.json(data.users); 
  } catch (error) {
    console.error('Error fetching users:', error);
    return NextResponse.json({ error: 'Failed to fetch users' }); 
  }
}

export async function POST(request: Request) {
  const { name, email } = await request.json();
  if (!name || !email) {
    return NextResponse.json({ error: 'Name and email are required' });  
  }

  try {
    const res = await fetch('https://dummyjson.com/users/add', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName: name, email }),
    });

    const data = await res.json();
    return NextResponse.json(data);  
  } catch (error) {
    console.error('Error adding user:', error);
    return NextResponse.json({ error: 'Failed to add user' });  
  }
}

export async function DELETE(request: Request) {
  const { userId } = await request.json();
  if (!userId) {
    return NextResponse.json({ error: 'User ID is required for deletion' }); 
  }

  try {
    const res = await fetch(`https://dummyjson.com/users/${userId}`, {
      method: 'DELETE',
    });

    if (res) {
      return NextResponse.json({ message: 'User deleted successfully' }); 
    } else {
      return NextResponse.json({ error: 'Failed to delete user' });  
    }
  } catch (error) {
    console.error('Error deleting user:', error);
    return NextResponse.json({ error: 'Failed to delete user' }); 
  }
}
