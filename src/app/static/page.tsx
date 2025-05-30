import React from 'react'
import Image from 'next/image';

export default async function page() {
    const res = await fetch('http://localhost:3000/api/users');
    const users = await res.json();
    console.log('data', users);
  return (
    <div style={{display:'flex',flexDirection:'column', gap:'1rem', justifyContent:'center', alignItems:'center'}}>
      <h1>This is our static page</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent:'space-around', alignItems: 'center' }}>
        {
          users.map((user:{id:number,firstName:string,lastName:string,image:string,email:string}) => (
            <div key={user.id} style={{ margin: '10px', border: '1px solid black', padding: '10px' }}>
              <h2>{user.firstName} {user.lastName}</h2>
              <Image
                src={user.image}
                alt={`${user.firstName} ${user.lastName}`}
                height={150}
                width={150}
              />
             
              <p>{user.email}</p>
            </div>
          ))
        }
      </div>
   
    </div>
  )
}
