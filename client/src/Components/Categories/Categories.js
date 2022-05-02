import React from 'react'
import styled from "styled-components";
import CategoryItems from  '../CategoryItems/CategoryItems'
import {categories} from './CategoriesData'  
// import { useState, useEffect } from 'react';
// import axios from 'axios';


const Container = styled.div` 
    display: flex;
    padding: 20px;
    justify-content: space-between;
`;

const Categories = () => {
  // const [products, setProducts] = useState([])
  // const [filteredProducts, setFilteredProducts] = useState([]) 
  return (
    <Container>
        {categories.map((item)=>(
            <CategoryItems item={item} key={item.id}></CategoryItems>
        ))}
    </Container>
    // <Container>
    // {cat
    //   ? filteredProducts.map((item) => <CategoryItems item={item} key={item.id} />)
    //   : products
    //       .slice(0, 8)
    //       .map((item) => <CategoryItems item={item} key={item.id} />)}
    // </Container>
  )
}

export default Categories