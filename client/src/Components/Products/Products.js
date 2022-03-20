import React, { useEffect } from 'react'
import { popularProducts } from './ProductsData'
import styled from "styled-components";
import Product from '../Product/Product'
import { useState } from 'react';

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;  
`;

const Products = ({cat, filters, sort}) => { 
  const [products, setProducts] = useState([])
  const [fitleredProducts, setFilteredProducts] = useState([]) 

  useEffect(()=>{

  }, [cat])

  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}></Product>
        ))}
    </Container>
  )
}

export default Products