import { Container, Stack, HStack, VStack } from "@chakra-ui/react";
import React from "react";
import { Image, Box, styled } from "@chakra-ui/react";
import MainSlider from '../../components/slider/MainSlider';



const ImageGalleryOne = () => {
  
  return (
    <Container
      maxW="container"
      maxH="900px" mt="8px" align="center"
    >
      <Stack boxShadow="md" borderRadius="xl">
        <HStack spacing="24px" boxShadow="md" borderRadius="xl">
          <Box w="80%" h="auto">
           <HStack m="4">
           </HStack>
           <MainSlider />
          </Box>
          <Box w="20%" h="700px" mt="0px !important">
            <VStack m="5">
            <Image
              w="full"
              h="120px"
              src="/sliderImages/PostImag2.jpg"
              alt="Dan Abramov"
              borderRadius="8"
            />
            </VStack>
            <VStack m="5">
            <Image
              w="full"
              h="120px"
              src="/sliderImages/PostImag3.jpg"
              alt="Dan Abramov"
              borderRadius="8"
            />
            </VStack>
            <VStack m="5">
            <Image
              w="full"
              h="120px"
              src="/sliderImages/PostImag4.jpg"
              alt="Dan Abramov"
              borderRadius="8"
            />
            </VStack>
            <VStack m="5">
            <Image
              w="full"
              h="120px"
              src="/sliderImages/PostImag5.jpg"
              alt="Dan Abramov"
              borderRadius="8"
            />
            </VStack>
            <VStack m="5">
            <Image
              w="full"
              h="120px"
              src="/sliderImages/PostImag1.jpg"
              alt="Dan Abramov"
              borderRadius="8"
            />
            </VStack>
          </Box>
        </HStack>
      </Stack>
    </Container>
  );
};

export default ImageGalleryOne;
