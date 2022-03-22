import React from 'react'
import styled from "styled-components";
import {
    FavoriteBorderOutlined,
    SearchOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";
// import {Link} from 'react-router-dom';
// import table2 from '../../Images/table2.png'
// import table3 from '../../Images/table3.png'
// import chair3 from '../../Images/chair3.png'
// import sofa2 from '../../Images/sofa2.png'
// import sofa3 from '../../Images/sofa3.png'
// import sofa4 from '../../Images/sofa4.png'
// import table4 from '../../Images/table4.png'


const Info = styled.div`
  opacity: 0;
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(0, 0, 0, 0.2); 
  z-index: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.5s ease;
  cursor: pointer;
`;

const Container = styled.div`
  flex: 1;
  margin: 5px;
  min-width: 280px;
  height: 350px;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: #f5fbfd; */
  position: relative;
  &:hover ${Info}{
    opacity: 1;
  }
`;

const Circle = styled.div`
  width: 200px;
  height: 200px;
  border-radius: 50%;
  background-color: white;
  position: absolute;
`;

const Image = styled.img`
  height: 75%;
  z-index: 2;
`;

const Icon = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background-color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  transition: all 0.5s ease;
  &:hover {
    background-color: #e9f5f5;
    transform: scale(1.1);
  }
`;


const Product = ({item}) => { 
  console.log(typeof(item.img), 'this is the item')
  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
            <Icon>
              <ShoppingCartOutlined />
            </Icon>
            <Icon>
              {/* <Link> */}
              <SearchOutlined />
              {/* </Link> */}
            </Icon>
            <Icon>
              <FavoriteBorderOutlined />
            </Icon>
        </Info>
    </Container>
  )
}

export default Product