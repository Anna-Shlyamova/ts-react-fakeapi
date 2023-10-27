import React, { useEffect, useState } from 'react';
import ProductItem from '../components/ProductItem';
import getRequest from '../data/products';
import { Product, ProductList } from '../data/requests';
const Main=() =>{
  const [products, setProducts] = useState<Product[]>([]);
  useEffect(()=> {
    (async function(){
    const productsL = await getRequest< ProductList>("https://fakestoreapi.com/products");
    setProducts(productsL);
    })();
  }, []);

  useEffect(()=> {
    console.log(products);
  }, [products]);

  return (
    <div className="container mx-auto max-w-2xl pt-5">
      {products.map((item)=> <ProductItem prod={item}/>)}
    </div>
  );
}

export default Main;
