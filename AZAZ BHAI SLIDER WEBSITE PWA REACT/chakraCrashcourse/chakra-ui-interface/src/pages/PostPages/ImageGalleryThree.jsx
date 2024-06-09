import { Container, Stack, HStack, VStack, Grid } from "@chakra-ui/react";
import React from "react";
import { Image, Box } from "@chakra-ui/react";
import MainSlider from '../../components/sliderThree/MainSlider';

const ImageGalleryThree = () => {
  return (
        <Container
          maxW="container"
          maxH="900px" mt="8px" align="center"
        >
          <Stack boxShadow="md" borderRadius="xl" >
            <HStack spacing="24px" boxShadow="md" borderRadius="xl">
              <Grid w="80%" h="auto" order="2" >
               <HStack m="4">
               </HStack>
               <MainSlider />
              </Grid>
              <Grid w="20%" >
                <VStack m="5">
                <Image
                  w="full"
                  h="120px"
                  src="/sliderThree/main.jpg"
                  alt="Dan Abramov"
                  borderRadius="8"
                />
                </VStack>
                <VStack m="5">
                <Image
                  w="full"
                  h="120px"
                  src="/sliderThree/main2.jpg"
                  alt="Dan Abramov"
                  borderRadius="8"
                />
                </VStack>
                <VStack m="5">
                <Image
                  w="full"
                  h="120px"
                  src="/sliderThree/main3.jpg"
                  alt="Dan Abramov"
                  borderRadius="8"
                />
                </VStack>
                <VStack m="5">
                <Image
                  w="full"
                  h="120px"
                  src="/sliderThree/main4.jpg"
                  alt="Dan Abramov"
                  borderRadius="8"
                />
                </VStack>
                <VStack m="5">
                <Image
                  w="full"
                  h="120px"
                  src="/sliderThree/main5.jpg"
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
    
   
    


export default ImageGalleryThree
