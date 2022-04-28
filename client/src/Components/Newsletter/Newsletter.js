import React from 'react'
import { useState } from 'react';
import styled from 'styled-components'
import { Send } from "@mui/icons-material";
import { mobile } from "../../responsive";

const Container = styled.div`
  height: 60vh;
  background-color: black;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const Title = styled.h1`
  font-size: 70px;
  margin-bottom: 20px;
  color: white;
`;

const Desc = styled.div`
  font-size: 24px;
  font-weight: 300;
  margin-bottom: 20px;
  ${mobile({ textAlign: "center" })}
  color: white;
`;

const InputContainer = styled.div`
  width: 50%;
  height: 40px;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border: 1px solid lightgray;
  ${mobile({ width: "80%" })}
`;

const Input = styled.input`
  border: none;
  flex: 8;
  padding-left: 20px;
`;

const Button = styled.button`
  flex: 1;
  border: none;
  background-color: teal;
  color: white;
`;

const Newsletter = () => {
  const [val, setVal] = useState();
  return (
    <Container>
        <Title>Newsletter</Title>
        <Desc>Get timely updates from your favorite products.</Desc>
        
        <InputContainer>
        <Input placeholder="Your email" type="text" value={val}/>
        <Button onClick={() => setVal(() => "")}>
            <Send />
        </Button>
        </InputContainer>

  </Container>

  )
}

export default Newsletter