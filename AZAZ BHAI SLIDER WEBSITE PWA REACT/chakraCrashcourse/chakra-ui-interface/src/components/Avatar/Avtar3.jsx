import React from 'react'
import { HStack, Avatar, Text } from '@chakra-ui/react';
const Avtar3 = () => {
  return (
    <HStack>
    <Avatar src="/images/avatar3.jpg" alt="post image" size="lg" />
    <Text fontWeight="600">Aizaz Khan Swati</Text>
    <Text fontSize="xs">1 min ago</Text>
  </HStack>
  )
}

export default Avtar3
