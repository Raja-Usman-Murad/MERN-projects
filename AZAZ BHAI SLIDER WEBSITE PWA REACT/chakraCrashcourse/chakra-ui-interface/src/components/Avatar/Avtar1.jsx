import React from 'react';
import { HStack, Avatar, Text } from '@chakra-ui/react';

const Avtar1 = () => {
  return (
    <HStack>
        <Avatar src="/images/avatar1.jpg" alt="post image" size="lg" />
        <Text fontWeight="600">Aizaz Khan Swati</Text>
        <Text fontSize="xs">1 min ago</Text>
      </HStack>
  )
}

export default Avtar1
