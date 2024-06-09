import {
  Container,
  Stack,
  HStack,
  Button,
  VStack,
  Image,
  Box,
} from "@chakra-ui/react";
import React from "react";
import Avtar1 from "../../components/Avatar/Avtar1";
import { Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import Avtar2 from "../../components/Avatar/Avtar2";
import Avtar3 from "../../components/Avatar/Avtar3";

const PostGallery = () => {
  return (
    <Container maxW="container" mt="8px" align="center">
      <Stack spacing={8} align="center" my="20px">
        <VStack w="full">
          <Stack width="90%" mx="auto" boxShadow="md" borderRadius="xl">
            <Avtar1 />
            <Image
              w="full"
              h="500px"
              src="/images/PostImageMain.jpg"
              alt="Dan Abramov"
            />
            <HStack justify="space-between" w="full">
              <Button size="lg" as={Link} to="/post" my="30px">
                View Post
              </Button>
              <Button size="lg" as={Link} to="/galleryOne" my="30px">
                Image Gallery
              </Button>
            </HStack>
          </Stack>

          <Stack width="90%" mx="auto" mt="20 !important" boxShadow="md" borderRadius="xl">
          <Avtar2 />
            <Image
              w="full"
              h="500px"
              src="/images/PostImage2Main.jpg"
              alt="Dan Abramov"
            />
            <HStack justify="space-between" w="full">
              <Button size="lg" as={Link} to="/post" my="30px">
                View Post
              </Button>
              <Button size="lg" as={Link} to="/galleryTwo" my="30px">
                Image Gallery
              </Button>
            </HStack>
          </Stack>

          <Stack width="90%" mx="auto" mt="20 !important" boxShadow="md" borderRadius="xl">
          <Avtar3 />
            <Image
              w="full"
              h="500px"
              src="/images/PostImage3Main.jpg"
              alt="Dan Abramov"
            />
            <HStack justify="space-between" w="full">
              <Button size="lg" as={Link} to="/post" my="30px">
                View Post
              </Button>
              <Button size="lg" as={Link} to="/galleryThree" my="30px">
                Image Gallery
              </Button>
            </HStack>
          </Stack>

        </VStack>
      </Stack>
    </Container>
  );
};

export default PostGallery;
