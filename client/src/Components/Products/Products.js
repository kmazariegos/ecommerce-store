import React from 'react'
import { popularProducts } from './ProductsData'
import styled from "styled-components";
import Product from '../Product/Product'

const Container = styled.div`
    padding: 20px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`;

const Products = ({cat, filters, sort}) => {
  return (
    <Container>
        {popularProducts.map((item)=>(
            <Product item={item} key={item.id}></Product>
        ))}
    </Container>
  )
}

export default Products