import React from 'react';
import './index.css';
import ProductItem from './components/ProductItem';
import getRequest from './data/products';
import { Product, ProductList } from './data/requests';
import { forEachChild } from 'typescript';
function App() {
 const rt = async function(){
    let productsL = await getRequest< ProductList>("https://fakestoreapi.com/products");
};
  return (
    <div className="container mx-auto max-w-2xl pt-5">
      <header className="App-header">
      header
      </header>
      <div>{rt().map({item}: Product=> <ProductItem prod={item}/>)}</div>
    </div>
  );
}

export default App;
