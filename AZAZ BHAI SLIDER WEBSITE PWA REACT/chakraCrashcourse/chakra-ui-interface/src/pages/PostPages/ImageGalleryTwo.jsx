import { Container, Stack, HStack, VStack, Grid } from "@chakra-ui/react";
import React from "react";
import { Image, Box } from "@chakra-ui/react";
import MainSlider from '../../components/sliderTwo/MainSlider';



const ImageGalleryTwo = () => {
  return (
    <Container
      maxW="container"
      maxH="900px" mt="8px" align="center"
    >
      <Stack boxShadow="md" borderRadius="xl" >
        <HStack spacing="24px" boxShadow="md" borderRadius="xl" flexDirection="column-reverse" >
          <Grid w="80%" h="auto" order="2" >
           <HStack m="4">
           </HStack>
           <MainSlider />
          </Grid>
          <Grid w="60%"  justifyContent="space-between" padding="20px" order="1" display="flex" >
            <VStack m="5">
            <Image
              w="full"
              h="120px"
              src="/sliderTwo/PostImage2.jpg"
              alt="Dan Abramov"
              borderRadius="8"
            />
            </VStack>
            <VStack m="5">
            <Image
              w="full"
              h="120px"
              src="/sliderTwo/PostImage3.jpg"
              alt="Dan Abramov"
              borderRadius="8"
            />
            </VStack>
            <VStack m="5">
            <Image
              w="full"
              h="120px"
              src="/sliderTwo/PostImage4.jpg"
              alt="Dan Abramov"
              borderRadius="8"
            />
            </VStack>
            <VStack m="5">
            <Image
              w="full"
              h="120px"
              src="/sliderTwo/PostImage5.jpg"
              alt="Dan Abramov"
              borderRadius="8"
            />
            </VStack>
            <VStack m="5">
            <Image
              w="full"
              h="120px"
              src="/sliderTwo/PostImage1.jpg"
              alt="Dan Abramov"
              borderRadius="8"
            />
            </VStack>
          </Grid>
        </HStack>
      </Stack>
    </Container>
  )
}

export default ImageGalleryTwo
