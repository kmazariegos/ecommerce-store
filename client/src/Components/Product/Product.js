import React from 'react'
import styled from "styled-components";  
import {
    SearchOutlined,
    ShoppingCartOutlined,
} from "@mui/icons-material";
import {Link} from 'react-router-dom';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ToggleButton from '@mui/material/ToggleButton'
import { useState } from 'react';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import ProductModal from '../../Pages/Product/ProductModal'


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

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};


const Product = ({item}) => {
  const [selected, setSelected] = useState(false);
  const [selectedSearch, setSelectedSearch] = useState(false);

  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);


  return (
    <Container>
        <Circle />
        <Image src={item.img}/>
        <Info>
            <Icon>
                  <ShoppingCartOutlined onClick={handleOpen}/>
                  <Modal
                    open={open}
                    onClose={handleClose}
                    aria-labelledby="modal-modal-title"
                    aria-describedby="modal-modal-description"
                  >
                    <Box sx={style}>
                        <ProductModal></ProductModal>
                    </Box>
                  </Modal>
            </Icon>
            <Icon>
              <Link to={`/product/${item._id}`}>
                <ToggleButton
                    color="primary"
                    value="check"
                    border="none"
                    selected={selectedSearch}
                    onChange={() => {
                      setSelectedSearch(!selectedSearch);
                    }}
                  >
                    <SearchOutlined />
                  </ToggleButton>
              </Link>
            </Icon>
            <Icon border="none">
                <ToggleButton
                color="primary"
                value="check"
                border="none"
                selected={selected}
                onChange={() => {
                  setSelected(!selected);
                }}
              >
                <FavoriteIcon/>
              </ToggleButton>
            </Icon>
        </Info>
    </Container>
  )
}

export default Product