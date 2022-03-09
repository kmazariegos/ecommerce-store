import React from 'react'
import { popularProducts } from './ProductsData'
import styled from "styled-components";
import Product from '../Product/Product'

const Container = styled.div`

`;

const Products = () => {
  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}></Product>
        ))}
    </Container>
  )
}

export default Products