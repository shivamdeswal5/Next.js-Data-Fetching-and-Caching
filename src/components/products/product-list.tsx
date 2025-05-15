
'use client';

import { useEffect, useState } from 'react';
import style from './style.module.css';
import Image from 'next/image';

type Product = {
  id: number;
  title: string;
  thumbnail: string;
  description: string;
  price: number;
};

export default function ProductList() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await fetch('https://dummyjson.com/products?limit=10');
        const data = await res.json();
        setProducts(data.products);
      } catch (error) {
        console.error('Error fetching products:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <h2 className={style.alignLoading}> Loading Products </h2>
    );
  }

  if (!products) return <p>Failed to load products.</p>;

  return (
    <div className={style.productList}>
      {products.map((product) => (
        <div key={product.id} className={style.productCard}>
          <h2>{product.title}</h2>
          <Image src={product.thumbnail} height={150}  width={150} alt='image'/>
          <p className={style.discription}>{product.description}</p>
          <p><b>Price: ${product.price}</b></p>
        </div>
      ))}
    </div>
  );
}
