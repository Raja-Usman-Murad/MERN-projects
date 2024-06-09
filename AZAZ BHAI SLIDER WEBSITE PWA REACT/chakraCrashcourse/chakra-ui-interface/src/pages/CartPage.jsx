import React from 'react';
import { Container, Flex } from '@chakra-ui/react';
import Cart from '../components/Cart';
import YourDetails from '../components/YourDetails';


const CartPage = () => {
  return (
    <div>
    <Container maxWidth="container.xl" p="10">
      <Flex 
        h={{base: "auto", md: "100vh"}}
        // mb={[5, 10, 20]}
        py={[0, 10,20]}
        direction= {{
          base: "column-reverse",
          md: "row",
        }}
      >
        <YourDetails />
        <Cart/>
      </Flex>
    </Container>
      
    </div>
  )
}

export default CartPage
