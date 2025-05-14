import React from 'react'

export default async function page() {
    const res = await fetch('https://dummyjson.com/products/1',{ cache: 'no-store' });
    const data = await res.json();
  return (
    <div style={{ padding: '20px', display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
      <h1>This is our static page</h1>
      <p>
        {
            data.title
        }
      </p>
      <img src={data.thumbnail} alt="" />
      <p>{data.description}</p>
    </div>
  )
}
